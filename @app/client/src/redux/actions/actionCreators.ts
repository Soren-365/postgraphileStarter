import { ACCOUNT, ACTION, S3 } from "../types/types";

export function failure(error: any) {
  return {
    type: ACTION.FAILURE,
    error,
  };
}

export function loadData() {
  return { type: ACTION.LOAD_DATA };
}

export function loadDataSuccess(data: any) {
  return {
    type: ACTION.LOAD_DATA_SUCCESS,
    data,
  };
}

export function loadS3Object(component: any) {
  return { type: S3.LOAD_S3_OBJECT_REQUEST, component };
}

export function loadObjectFromS3Success(object: any, component: any) {
  return {
    type: S3.LOAD_S3_OBJECT_SUCCESS,
    object,
    component,
  };
}

export function logout_() {
  return {
    type: ACCOUNT.LOGOUT_REQUEST,
  };
}

export function login_() {
  return {
    type: ACCOUNT.LOGIN_REQUEST,
  };
}

export function route_history_update(routeObject: any) {
  return {
    type: ACTION.ROUTE_UPDATE,
    newRoute: routeObject,
  };
}

export function startClock() {
  return { type: ACTION.START_CLOCK };
}

export function tickClock(isServer: any) {
  return {
    type: ACTION.TICK_CLOCK,
    light: !isServer,
    ts: Date.now(),
  };
}
