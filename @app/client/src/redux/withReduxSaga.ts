import nextReduxSaga from "next-redux-saga";
import nextReduxWrapper from "next-redux-wrapper";

import configureStore from "./basicStore";

export default function (BaseComponent: any) {
  return nextReduxWrapper(configureStore)(nextReduxSaga(BaseComponent));
}
