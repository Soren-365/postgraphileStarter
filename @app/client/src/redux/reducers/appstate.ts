import Router from "next/router";
import { object } from "prop-types";

import { destinationresourceDbType } from "../../dexie/dbTypes/__generatedFromBackend__/types/destinationresourceDbType";
import { DbTables } from "../../functions/__generatedFromBackend__/tableEnums";
import { clientDbI } from "../sagas/dbSaga";
import { APPSTATE } from "../types/types";
export const fetchStates = {
  fetching: "fetching",
  error: "error",
  success: "success",
  saga: "Saga processing",
};

export const InitialState = {
  error: false,
  now_showing_resourceType: DbTables.destinationresource,
  now_showing_resourceId: 5,
  route_history: ["app fresh initiated"],
  view: { object: {} },
  request_data: { id: undefined, nodeId: undefined },
  upload_done: undefined,
  signedUrls: undefined,
  requestCLDBargs: { tableKey: undefined, tableId: undefined },
  inc: undefined,
};

const mainImage: unique symbol = Symbol("mainImage");
const guideImage: unique symbol = Symbol("guideImage");
const mapImage: unique symbol = Symbol("mapImage");
const thumbnailImage: unique symbol = Symbol("thumbnailImage");
const imageGallery1: unique symbol = Symbol("imageGallery");

export interface imagePlacement {
  [mainImage]?: string;
  [guideImage]?: string;
  [mapImage]?: string;
  [thumbnailImage]?: string;
  [imageGallery1]?: string;
}

export interface AppState {
  error: boolean;
  now_showing_resourceType: DbTables;
  now_showing_resourceId: number;
  route_history: string[];
  view: { object: typeof clientDbI[DbTables] };
  request_data: { id?: number | undefined; nodeId?: string | undefined };
  upload_done: boolean | undefined;
  signedUrls: imagePlacement | undefined;
  requestCLDBargs: {
    tableKey: DbTables | undefined;
    tableId: number | undefined;
  };
  inc: number | undefined;
}

const appstate = (
  state: AppState = InitialState,
  appstate: {
    inc: number;
    type: string;
    message: string;
    resourceType: DbTables;
    id: number;
    tableKey: DbTables;
    tableId: number;
    object: typeof clientDbI[DbTables];
    data: any;
    error: any;
    newRoute: string;
  }
): AppState => {
  switch (appstate.type) {
    // case APPSTATE.GET_RESOURCE_REQUEST:
    //   return {
    //     ...state,
    //     ...{
    //       request_data: { id: appstate.data.id, nodeId: appstate.data.nodeId },
    //     },
    //   };

    // case APPSTATE.GET_RESOURCE_SUCCESS:
    //   //  Router.push(`/${state.now_showing_resourcetype}`);
    //   return {
    //     ...state,
    //     ...{
    //       resource_destination: {
    //         id: appstate.data.id,
    //         nodeId: appstate.data.nodeId,
    //         object: appstate.data.object,
    //       },
    //     },
    //   };

    case APPSTATE.VIEW_XDBS_REQUEST: {
      //  Router.push(`/${state.now_showing_resourcetype}`);
      console.log(
        " !!!! tableKey, tableId",
        appstate.tableKey,
        appstate.tableId
      );
      return {
        ...state,
        ...{
          requestCLDBargs: {
            tableKey: appstate.tableKey,
            tableId: appstate.tableId,
          },
        },
      };
    }

    case APPSTATE.VIEW_XDBS_SUCCESS: {
      Router.push(`/${appstate.resourceType}`);
      return {
        ...state,
        ...{
          now_showing_resourceId: appstate.tableId,
          now_showing_resourceType: appstate.resourceType,
          view: { object: appstate.object },
        },
      };
    }

    case APPSTATE.VIEW_XDBS_ERROR: {
      return {
        ...state,
        ...{ error: true, message: appstate.message },
      };
    }

    case APPSTATE.FAILURE:
      return {
        ...state,
        ...{ error: appstate.error },
      };

    case APPSTATE.NOW_SHOWING_RESOURCE:
      return {
        ...state,
        ...{
          now_showing_resourcetype: appstate.resourceType,
          now_showing_resourceid: appstate.id,
        },
      };

    case APPSTATE.S3_OBJECT_REFRESH_REQUEST: {
      //  Router.push(`/${appstate.resourceType}`);
      return {
        ...state,
        ...{ Upload_done: true },
      };
    }

    case APPSTATE.S3_OBJECT_REFRESH_SUCCESS:
      return {
        ...state,
        ...{ Upload_done: false },
      };

    // case APPSTATE.GET_RESOURCE_REQUEST:
    //   return {
    //     ...state,
    //     ...{
    //       request_data: { id: appstate.data.id, nodeId: appstate.data.nodeId },
    //     },
    //   };

    case APPSTATE.INCREMENT_RESOURCE:
      return {
        ...state,
        ...{ inc: appstate.inc },
      };

    default:
      return state;
  }
};

export default appstate;
