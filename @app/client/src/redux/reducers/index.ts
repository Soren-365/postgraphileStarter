import { combineReducers } from "redux";

import account from "./account";
import action from "./actions";
import apiDb from "./apiDb";
import appstate from "./appstate";
import s3 from "./s3";

const rootReducer = combineReducers({ account, action, s3, appstate, apiDb });

export type AllAppStates = ReturnType<typeof rootReducer>;

export default rootReducer;
