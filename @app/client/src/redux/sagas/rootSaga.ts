import "isomorphic-unfetch";

import es6promise from "es6-promise";
import { all, call, fork, put, select, takeLatest } from "redux-saga/effects"; // spawn

import { BACKEND } from "../../config";
import { DbTables } from "../../functions/__generatedFromBackend__/tableEnums";
import { AllAppStates } from "../reducers";
import { ACCOUNT, API, APPSTATE } from "../types/types";
import { getClientDbData, getClientDbDataTypes } from "./dbSaga"; //, saveQueryDbData, queryDbById
import { loginFlow } from "./logInFlow";
import { resScroll } from "./resScroll";
import { xDbsViewRequest } from "./xDbsSagaRequest";

es6promise.polyfill();

function* rootSaga() {
  // yield all([  and spawn is replaced with yield // ])   ...
  yield all([
    yield fork(loginFlow),
    yield takeLatest([APPSTATE.VIEW_XDBS_REQUEST], xDbsViewRequest),
    yield takeLatest([APPSTATE.INCREMENT_RESOURCE], resScroll),
    // yield takeEvery('LOAD_S3_OBJECT_REQUEST', loadObjectFromS3),
    // yield takeEvery('UPLOAD_S3_OBJECT_REQUEST', uploadObjectToS3),
    //  yield takeEvery('GET_S3_OBJECT_SUCCESS', displayObjectFromS3)
  ]);
}
export default rootSaga;

/////////////////////////////

//////////////////////////////
export const logout = () =>
  fetchFromAccount({
    endpoint: "logout",
    options: {
      credentials: "include",
    },
    FETCH_TYPE: ACCOUNT.FETCH,
    ERROR_TYPE: ACCOUNT.FETCH_ERROR,
    SUCCESS_TYPE: ACCOUNT.FETCH_LOGOUT_SUCCESS,
  });

export const fetchFromAccount = ({
  endpoint,
  options,
  FETCH_TYPE,
  ERROR_TYPE,
  SUCCESS_TYPE,
}: any) => (dispatch: (arg0: { type: any; message?: any }) => void) => {
  // console.log("fectch address: ", `${BACKEND.ADDRESS}/account/${endpoint}`)
  console.log("In accountCreators fetch endpoint: /", endpoint);
  dispatch({ type: FETCH_TYPE });
  return fetch(`${BACKEND.ADDRESS}/account/${endpoint}`, options)
    .then((response) => response.json())
    .then((json) => {
      if (json.type === "error") {
        dispatch({ type: ERROR_TYPE, message: json.message });
      } else {
        dispatch({ type: SUCCESS_TYPE, ...json });
        console.log(
          "accountCreators (Redux): Fetch response body (json):",
          json
        );
      }
    })
    .catch((error) =>
      dispatch({
        type: ERROR_TYPE,
        message: error.message,
      })
    );
};

// export const displayS3ImageFile = ( file ) => {
//   console.log("saga: displayS3ImageFile, file imput:  ", file)

// }

////////////////

// function* runClockSaga() {
//   yield take(ACTION.START_CLOCK)
//   while (true) {
//     yield put(tickClock(false))
//     yield delay(1000)
//   }
// }

// function* loadDataSaga() {
//   try {
//     const res = yield fetch('https://jsonplaceholder.typicode.com/emails')
//     const data = yield res.json()
//     yield put(loadDataSuccess(data))
//   } catch (err) {
//     yield put(failure(err))
//   }
// }

// function* uploadObjectToS3() {
//   const state = yield select();
//   const { placeholderS3Url, placeholderS3Name } = state.s3
//   try {
//     console.log("saga: state to loadObjectFromS3", state)
//     const object = yield call(uploadImageToS3,{ amazonUrl: placeholderS3Url, file: placeholderS3Name })
//     yield put(object)
//     console.log("saga: object in loadObjectFromS3", object)
//   } catch (err) {
//     yield put(failure(err))
//   }
// }

// function* loadObjectFromS3() {
//   const state = yield select();
//   const { placeholderS3Url, placeholderS3Name } = state.s3
//   try {
//     console.log("saga: state to loadObjectFromS3", state)
//     const object = yield call(getImageFromS3,{ url: placeholderS3Url, name: placeholderS3Name })
//     yield put(object)
//     console.log("saga: object in loadObjectFromS3", object)
//   } catch (err) {
//     yield put(failure(err))
//   }
// }

// function* displayObjectFromS3() {
//   const state = yield select();
//   console.log("saga: state to displayObjectFromS3", state)
//   const { placeholderS3Object } = state.s3
// console.log("In saga: calling displayS3imageFile with placeholderS3Object:", placeholderS3Object)
//  yield call(displayS3ImageFile(placeholderS3Object))
// }

// function* dBasyncRecieve() {
//   let storage = new Storage()
//   while (true) {

//   }
// }
