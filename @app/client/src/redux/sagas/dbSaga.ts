/* global fetch */

import "isomorphic-unfetch";

import es6promise from "es6-promise";
import { call, put } from "redux-saga/effects";

// import Router from 'next/router'
// import { select } from 'redux-saga/effects'
// import { getImageFromS3 } from '../actions/api/s3Creators' //, uploadImageToS3
// import { getDestinationSync } from '../actions/api/appStateCreators'
// import { Storage } from '../../dexie/tableClasses/classSagaDb'
// import { getAgencyData } from 'dbSaga.ts'
// import { accountType } from '../reducers/account'
import clientDb from "../../db/dexieDB";
import { destinationresourceDbType } from "../../dexie/dbTypes/__generatedFromBackend__/types/destinationresourceDbType";
import { DbTables } from "../../functions/__generatedFromBackend__/tableEnums";
// import { MutationType } from '../../functions/controllers/commControl'
import comC from "../../functions/controllers/commControl";
import {
  atAgencyFetch,
  QueryByAtAgency,
} from "../../functions/fetch/atAgencyFetch";
import { idFetch, QueryId } from "../../functions/fetch/idFetch";
import { mutation } from "../../functions/fetch/mutation";
import { AllAppStates } from "../reducers";
// import { BACKEND } from '../../config'
import { API, APPSTATE } from "../types/types";

//import { AtAgencyTables } from '../../functions/__generatedFromBackend__/AtAgencyTables'
// import { AtAgencyTables } from '../../functions/__generatedFromBackend__/AtAgencyTables'
// import { AtAgencyTables } from '../../functions/__generatedFromBackend__/AtAgencyTables'
// import { object } from 'prop-types'

export const clientDbI = new clientDb();
export const comCI = new comC();

es6promise.polyfill();

export interface getClientDbDataTypes {
  tableKey: string;
  keyPath: any;
  tableId: any;
}

export function* getClientDbData({
  tableKey,
  keyPath,
  tableId,
}: getClientDbDataTypes) {
  console.log(
    "In getClientDbDataTypes: tableKey, keyPath, tableId:->",
    tableKey,
    keyPath,
    tableId
  );
  try {
    // clientDbI.transaction('rw', clientDbI[tableKey], function* () {
    let tableData = yield clientDbI[tableKey]
      .get({ [keyPath]: tableId })
      .catch((err) => {
        console.error("Error:", err);
      });

    return { tableKey, tableData };

    // })
  } catch (error) {
    //  console.error(error.stack || error)
    yield put({
      type: APPSTATE.GET_CLDB_ERROR,
      message: `In getClientDbData() error:, ${error}`,
    });
  }
}

export interface saveClientDbBulkDataTypes {
  agencyId: number;
  tableKey: string;
  tableData: destinationresourceDbType[];
}

export function* saveClientDbBulkData({
  agencyId,
  tableKey,
  tableData,
}: saveClientDbBulkDataTypes) {
  console.log(
    "In saveClientDbBulkDataTypes: agencyId, tableKey, tableData:->",
    agencyId,
    tableKey,
    tableData
  );
  try {
    clientDbI.transaction("rw", clientDbI[tableKey], function* () {
      yield clientDbI[tableKey]
        .bulkPut({ ...tableData })
        .then((lastKey) => {
          console.log(
            `clientDb write to table: ${tableKey} was succesfull, Last write id was:`,
            lastKey
          );
        })
        .catch((err) => {
          console.error("Error:", err);
        });
    });
    yield put({
      type: APPSTATE.SAVE_CLDB_SUCCESS,
      message: `In saga, saveClientDbBulkData() success`,
    });
  } catch (error) {
    //  console.error(error.stack || error)
    yield put({
      type: APPSTATE.SAVE_CLDB_ERROR,
      message: `In saveClientDbBulkData() error, ${error}`,
    });
  }
}

export interface saveClientDbDataTypes {
  agencyId: number;
  tableKey: string;
  tableData: destinationresourceDbType;
}

export function* saveClientDbData({
  agencyId,
  tableKey,
  tableData,
}: saveClientDbDataTypes) {
  console.log(
    "In saveClientDbDataTypes: agencyId, tableKey, tableData:->",
    agencyId,
    tableKey,
    tableData
  );
  //try {
  //   clientDbI.transaction('rw', clientDbI[tableKey], function* () {
  return yield clientDbI[tableKey]
    .put({ id: tableData.id, value: tableData })
    .then((lastKey) => {
      console.log(
        `clientDb write to table: ${tableKey} was succesfull, Last write id was:`,
        lastKey
      );
      return lastKey;
    })
    .catch((err) => {
      console.error("Error:", err);
    });
  // if (response) {
  //     yield put({
  //         type: APPSTATE.SAVE_CLDB_SUCCESS,
  //         message: `In saga, saveBulkDbData() success, response: ${response}`,
  //     }) }
  //   })

  // } catch (error) {
  //     //  console.error(error.stack || error)
  //     yield put({
  //         type: APPSTATE.SAVE_CLDB_ERROR,
  //         message: `In saveDbData() error, ${error}`,
  //     })
  // }
}

// var friend2Id = yield clientDbI.agency.get(1)
// var friend3Id = yield clientDbI.agency.get(2)

// var returned = yield clientDbI.agency.update(2, {
//     isRomanian: true,
// })

// var noteId = yield clientDbI.destinationresource.add({
//     title: 'Shop tomorrow',
//     date: new Date(),
//     items: ['milk', 'butter']
// });

// // Let's Client the clientDbI
// var closeagency = yield clientDbI.agency
//     .where('isCloseFriend').equals(1)
//     .toArray();

// console.log("Close agency:" + closeagency.map(f => f.name));

// var toShop = yield clientDbI.destinationresource
//     .where('title').startsWithIgnoreCase ('shop')
//     .toArray();

// console.log("Shopping list: " + toShop.map(note => note.items));
