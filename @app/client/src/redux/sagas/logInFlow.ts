import Router from "next/router";
import { call, fork, put, select, take } from "redux-saga/effects";

import { agencyDbType } from "../../dexie/dbTypes/__generatedFromBackend__/types/agencyDbType";
import { DbTables } from "../../functions/__generatedFromBackend__/tableEnums";
import { API, APPSTATE } from "../types/types";
import {
  getClientDbData,
  saveClientDbBulkData,
  saveClientDbBulkDataTypes,
  saveClientDbData,
  saveClientDbDataTypes,
} from "./dbSaga";
import { initCreateAgency, initGetAgencyData } from "./psqlCalls";
import { logout } from "./rootSaga";

export function* loginFlow() {
  while (true) {
    console.log("was here 0 start loginFlow()");
    yield take([
      "ACCOUNT_FETCH_LOGIN_SUCCESS",
      "ACCOUNT_FETCH_AUTHENTICATED_SUCCESS",
      "ACCOUNT_FETCH_SIGNUP_SUCCESS",
    ]);

    const state = yield select();
    const { startPageUrl } = state.account;
    let { agencyId } = state.account;
    const { userId } = state.account;
    console.log(
      "START DATA: pageurl, agency, userid:",
      startPageUrl,
      agencyId,
      userId
    );

    if (!agencyId) {
      const { tableKey, tableData } = yield call(initCreateAgency, userId);
      let args: saveClientDbDataTypes = {
        agencyId,
        tableKey,
        tableData,
      };
      yield call(saveClientDbData, args);
      console.log(
        "First time user. An agency was created in psql and copied to CLDB:",
        { agency: tableData }
      );
    } else {
      let { tableKey, tableData } = yield call(initGetAgencyData, agencyId);
      let args2: saveClientDbDataTypes = {
        agencyId,
        tableKey,
        tableData,
      };
      yield call(saveClientDbData, args2);
      const data = yield saveClientDbData(args2);
      console.log("agency Data saved to CLDB, answer:", data);
    }

    yield fork(loginBulkLoad);

    yield put({
      type: "VIEW_XDBS_REQUEST",
      resourceType: DbTables.destinationresource,
      tableId: 1,
    });

    try {
      //  Router.push(`/${DbTables.destinationresource}`)
      // const object = yield call(getDestinationSync())
      // yield put({ type: APPSTATE.GET_PG_SYNCER_SUCCESS, data: object })
    } catch (error) {
      yield put({
        type: APPSTATE.VIEW_XDBS_REQUEST,
        message: `In saga, logInFlow() error`,
      });
    }

    yield take("LOGOUT_REQUEST");
    try {
      document.cookie =
        " Troian=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
      console.log("Cookie TROIAN was DELETED");
      const message = yield call(logout);
      yield put({ type: "LOGOUT_SUCCESS", message: message });
      Router.push("/auth-login");
    } catch (error) {
      yield put({
        type: "LOGOUT_ERROR",
        message: `In saga, error: ${error}`,
      });
    }
  }
}

export function* loginBulkLoad() {
  const state = yield select();
  const { agencyId } = state.account;
  console.log("agencyId in rootsaga loginFlow", agencyId);

  try {
    //yield spawn(getDataLoopFlow)
  } catch (error) {
    yield put({
      type: "LOGIN_ERROR",
      message: `error In Saga: loginflow `,
    });
  }
}
