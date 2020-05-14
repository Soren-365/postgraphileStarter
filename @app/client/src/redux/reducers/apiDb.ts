import { API } from "../types/types";
import apiDbTypes from "./__generatedFromBackend__/DexieDBallTypes";
import { apiDbDefaults } from "./__generatedFromBackend__/DexieDBreduxInitialStateString";

export const loadStates = {
  loading: "loading",
  error: "error",
  success: "success",
  saga: "Saga processing",
};

export interface apiDbRequest {
  query: any;
  id: number;
  nodeId?: string;
  status: string;
}
const apiDb = (
  state = apiDbDefaults,
  data: { type: any; query: any; id: any; destinationresource: any; error: any }
): apiDbT => {
  switch (data.type) {
    case API.QUERY_PGDB_REQUEST:
      return {
        ...state,
        ...{ status: loadStates.loading, query: data.query, id: data.id },
      };

    case API.QUERY_PGDB_SUCCESS:
      return {
        ...state,
        ...{
          status: loadStates.success,
          destinationresource: data.destinationresource,
        },
      };

    case API.QUERY_PGDB_ERROR:
      return {
        ...state,
        ...{ status: loadStates.error, error: data.error },
      };

    default:
      return state;
  }
};

export default apiDb;
