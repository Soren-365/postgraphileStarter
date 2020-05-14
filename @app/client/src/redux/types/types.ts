const ACCOUNT = {
  FETCH: "ACCOUNT_FETCH",
  FETCH_ERROR: "ACCOUNT_FETCH_ERROR",
  FETCH_AUTH_SUCCESS: "ACCOUNT_FETCH_AUTH_SUCCESS",
  FETCH_LOGIN_SUCCESS: "ACCOUNT_FETCH_LOGIN_SUCCESS",
  FETCH_SIGNUP_SUCCESS: "ACCOUNT_FETCH_SIGNUP_SUCCESS",
  FETCH_LOGOUT_SUCCESS: "ACCOUNT_FETCH_LOGOUT_SUCCESS",
  FETCH_NEWPASSWORD_SUCCESS: "ACCOUNT.FETCH_NEWPASSWORD_SUCCESS",
  FETCH_NEWPASSCONFIRMED_SUCCESS: "ACCOUNT.FETCH_NEWPASSCONFIRMED_SUCCESS",
  FETCH_AUTHENTICATED_SUCCESS: "ACCOUNT_FETCH_AUTHENTICATED_SUCCESS",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_ERROR: "LOGOUT_ERROR",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  SIGNIN_REQUEST: "SIGNIN_REQUEST",
  SIGNIN_ERROR: "SIGNIN_ERROR",
};

const ACTION = {
  FAILURE: "FAILURE",
  LOAD_DATA: "LOAD_DATA",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
  START_CLOCK: "START_CLOCK",
  TICK_CLOCK: "TICK_CLOCK",
  ROUTE_UPDATE: "ROUTE_UPDATE",
};

const S3 = {
  UPLOAD_S3_OBJECT: "UPLOAD_S3_OBJECT",
  UPLOAD_S3_OBJECT_SUCCESS: "UPLOAD_S3_OBJECT_SUCCESS",
  UPLOAD_S3_OBJECT_ERROR: "UPLOAD_S3_OBJECT_ERROR",
  GET_S3_OBJECT: "GET_S3_OBJECT",
  GET_S3_OBJECT_SUCCESS: "GET_S3_OBJECT_SUCCESS",
  GET_S3_OBJECT_ERROR: "GET_S3_OBJECT_ERROR",
  GET_S3_URL: "GET_S3_URL",
  GET_S3_URL_SUCCESS: "GET_S3_URL_SUCCESS",
  GET_S3_URL_ERROR: "GET_S3_URL_ERROR",
  LOAD_S3_OBJECT_REQUEST: "LOAD_S3_OBJECT_REQUEST",
  LOAD_S3_OBJECT_SUCCESS: "LOAD_S3_OBJECT_SUCCESS",
  UPLOAD_S3_OBJECT_REQUEST: "UPLOAD_S3_OBJECT_REQUEST",
};

const API = {
  MUTATE_PGDB_REQUEST: "MUTATE_PGDB_REQUEST",
  MUTATE_PGDB_SUCCESS: "MUTATE_PGDB_SUCCESS",
  MUTATE_PGDB_ERROR: "MUTATE_PGDB_ERROR",
  QUERY_PGDB_REQUEST: "QUERY_PGDB_REQUEST",
  QUERY_PGDB_SUCCESS: "QUERY_PGDB_SUCCESS",
  QUERY_PGDB_ERROR: "QUERY_PGDB_ERROR",
};

const APPSTATE = {
  LOGGEDIN_WITHAGENCY: "LOGGEDIN_WITHAGENCY",
  NOW_SHOWING_RESOURCE: "NOW_SHOWING_RESOURCE",
  ROUTE_UPDATE: "ROUTE_UPDATE",
  FAILURE: "FAILURE",
  INCREMENT_RESOURCE: "INCREMENT_RESOURCE",
  GET_CLDB_REQUEST: "GET_CLDB_REQUEST",
  GET_CLDB_SUCCESS: "GET_CLDB_SUCCESS",
  GET_CLDB_ERROR: "GET_CLDB_ERROR",
  SAVE_CLDB_REQUEST: "SAVE_CLDB_REQUEST",
  SAVE_CLDB_SUCCESS: "SAVE_CLDB_SUCCESS",
  SAVE_CLDB_ERROR: "SAVE_CLDB_ERROR",
  VIEW_XDBS_REQUEST: "VIEW_XDBS_REQUEST",
  VIEW_XDBS_SUCCESS: "VIEW_XDBS_SUCCESS",
  VIEW_XDBS_ERROR: "VIEW_XDBS_ERROR",
  GET_DEXIE_SYNCER: "GET_DEXIE_SYNCER",
  GET_DEXIE_SYNCER_SUCCESS: "GET_DEXIE_SYNCER_SUCCESS",
  GET_DEXIE_SYNCER_ERROR: "GET_DEXIE_SYNCER_ERROR",
  S3_OBJECT_REFRESH_REQUEST: "S3_OBJECT_REFRESH_REQUEST",
  S3_OBJECT_REFRESH_SUCCESS: "S3_OBJECT_REFRESH_SUCCESS",
};

export { ACCOUNT, ACTION, S3, APPSTATE, API };
