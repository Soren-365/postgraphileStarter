// store.ts

import { Context, createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import thunk from "redux-thunk";

import monitorReducersEnhancer from "../redux-util/enhancers/monitorReducer";
import loggerMiddleware from "../redux-util/middleware/logger";
import account from "./reducers/account";
import action from "./reducers/actions";
import apiDb from "./reducers/apiDb";
import appstate from "./reducers/appstate";
import s3 from "./reducers/s3";
import rootSaga from "./sagas/rootSaga";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const bindMiddleware = (middleware: any): any => {
  const allEnhancers = [thunk, middleware, loggerMiddleware];
  // const allEnhancers = [ middleware]

  const middlewareEnhancer = applyMiddleware(...allEnhancers);
  let composeEnhancers = compose;
  let enhancers = [];
  if (typeof window !== "undefined") {
    enhancers = [middlewareEnhancer, monitorReducersEnhancer];

    if (process.env.NODE_ENV !== "production") {
      composeEnhancers =
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          latency: 0,
          trace: true,
          traceLimit: 25,
        }) || compose;
      //const { composeWithDevTools } = require('redux-devtools-extension');
      //const composeEnhancers = composeWithDevTools();
      enhancers = [...enhancers];
      // return composeWithDevTools(...enhancers, { trace: true, traceLimit: 25} );
    }
  } else {
    enhancers = [middlewareEnhancer];
  }

  return composeEnhancers(...enhancers);
};

export interface State {
  server: any;
  client: any;
}

// create your reducer
const reducer = (
  state: State = { server: {}, client: {} },
  action: AnyAction
) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.server,
        },
      };

    case "CLIENT_SERVER":
      return {
        ...state,
        server: {
          ...state.server,
          tick: action.payload,
        },
      };

    case "CLIENT_ACTION":
      return {
        ...state,
        client: {
          ...state.client,
          tick: action.payload,
        },
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
  account,
  action,
  s3,
  appstate,
  apiDb,
});

export type AllAppStates = ReturnType<typeof rootReducer>;

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, bindMiddleware(sagaMiddleware));

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}

// create a makeStore function
export const makeStore: MakeStore<AllAppStates> = (context: Context) =>
  configureStore();

// export an assembled wrapper
export const wrapper = createWrapper<AllAppStates>(makeStore, { debug: true });
