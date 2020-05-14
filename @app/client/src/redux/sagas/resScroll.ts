import { put, select } from "redux-saga/effects";

import { DbTables } from "../../functions/__generatedFromBackend__/tableEnums";

export function* resScroll() {
  const state = yield select();
  const { now_showing_resourceId, inc } = state.appstate;
  yield put({
    type: "VIEW_XDBS_REQUEST",
    resourceType: DbTables.destinationresource,
    tableId: now_showing_resourceId + inc,
  });
}
