import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

import monitorReducersEnhancer from "../redux-util/enhancers/monitorReducer";
import loggerMiddleware from "../redux-util/middleware/logger";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas/rootSaga";

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

const store = function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
};

export default store;
