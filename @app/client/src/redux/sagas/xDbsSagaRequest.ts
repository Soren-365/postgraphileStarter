import { call, fork, join, put, select } from "redux-saga/effects";

import {
  psqlCallEnums,
  psqlCalls,
  psqlCallTypes,
} from "../../functions/__generatedFromBackend__/calltypesEnums";
import { DbTables } from "../../functions/__generatedFromBackend__/tableEnums";
import { DbTablesI } from "../../functions/__generatedFromBackend__/tableInterface";
import { AllAppStates } from "../reducers";
import { APPSTATE } from "../types/types";
import { getClientDbData, getClientDbDataTypes } from "./dbSaga";

export function* xDbsViewRequest() {
  try {
    console.log("Started xDbsViewRequest()");
    const state = yield select();
    const { tableId } = state.appstate.requestCLDBargs; //, tableKey
    const { agencyId } = state.account;

    let check = {};
    while (check === {}) {
      setTimeout(() => {
        console.log("waiting for requestCLDBargs...");
      }, 20);
      check = state.account.requestCLDBargs;
    }

    const tableKey = DbTables.destinationresource;
    const CLDB_LastModified = yield fork(fetchCLDBtoRedux, tableKey, tableId);
    const tableData = yield call(
      fetchPsqlDBtoXDbs,
      tableKey,
      agencyId,
      tableId
    );

    const CLDB_Last = yield join(CLDB_LastModified);
    console.log(
      "CLDB_Last & Query.LastModified",
      CLDB_Last,
      tableData.LastModified
    );
    // if client (local) data is old, then proceed with update CLDB and Redux. otherwise no effect
    if (tableData.LastModified > CLDB_Last) {
      console.log(
        " DO SOME LOGIC HERE for storing the psql object into location of CLDB object"
      );
    }
  } catch (err) {
    console.log("Error in xDbsViewRequest()", err);
    yield put({ type: APPSTATE.VIEW_XDBS_ERROR, message: err });
  }
}

export function* fetchCLDBtoRedux(tableKey, tableId) {
  try {
    console.log("fetchCLDBtoRedux() tableKey, tableId", tableKey, tableId);
    //  const state: AllAppStates = yield select()
    //  const {tableKey, tableId  } = state.appstate.requestCLDBargs
    // // const tableKey1: DbTables = state.appstate.now_showing_resourcetype
    const keyPath = "id";
    // const value1 = state.appstate.now_showing_resourceid
    let args: getClientDbDataTypes = { tableKey, keyPath, tableId };
    const { tableData } = yield call(getClientDbData, args);
    // yield put({
    //     type: APPSTATE.GET_CLDB_SUCCESS,
    //     data: {
    //         id: tableData.id,
    //         nodeId: tableData.nodeId,
    //         object: tableData,
    //     },
    // })
    yield put({
      type: APPSTATE.VIEW_XDBS_SUCCESS,
      tableId: tableId,
      resourceType: tableKey,
      object: tableData,
    });
    return tableData.LastModified;
  } catch (err) {
    console.log("Error in fetchCLDBtoRedux()", err);
  }
}

///////Create Agency if Userlogin returned no agency///////////////////
export function* fetchPsqlDBtoXDbs(
  tableKey: DbTables,
  agencyId: number,
  tableId: number
) {
  {
    // 1): change tableKey ...
    // 2): change callType ...
    // 3): change variables. Enjoy typelinting on graphql calls
    // 4): change queryId
    console.log(
      "fetchPsqlDBtoXDbs() tableKey, tableId, agencyId",
      tableKey,
      tableId,
      agencyId
    );

    const callType = psqlCallEnums.agencyQuery;

    const args = {
      tableKey: tableKey,
      variables: {
        [tableKey]: {
          atAgency: agencyId,
          id: tableId,
        },
      },
      queryId: "initCreateAgency",
    };

    return yield call(psqlCalls[callType], args);
  }
}
