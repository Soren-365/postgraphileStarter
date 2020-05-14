import { createMutationType } from "../../__generatedFromBackend__/psqlmutations/getCreateMutation";
import { deleteMutationType } from "../../__generatedFromBackend__/psqlmutations/getDeleteMutation";
import { updateMutationType } from "../../__generatedFromBackend__/psqlmutations/getUpdateMutation";
import { agencyQueryType } from "../../__generatedFromBackend__/psqlqueries/getAgencyQuery";
import { conditionalQueryType } from "../../__generatedFromBackend__/psqlqueries/getConditionalQuery";
import { idQueryType } from "../../__generatedFromBackend__/psqlqueries/getIdQuery";
import { nodeQueryType } from "../../__generatedFromBackend__/psqlqueries/getNodeQuery";
import {
  agencyQuery,
  conditionalQuery,
  createMutation,
  deleteMutation,
  idQuery,
  nodeQuery,
  updateMutation,
} from "../../redux/sagas/commSaga";

export interface psqlCallTypes {
  nodeQuery: nodeQueryType;
  idQuery: idQueryType;
  conditionalQuery: conditionalQueryType;
  agencyQuery: agencyQueryType;
  createMutation: createMutationType;
  updateMutation: updateMutationType;
  deleteMutation: deleteMutationType;
}

export enum psqlCallEnums {
  nodeQuery = "nodeQuery",
  idQuery = "idQuery",
  conditionalQuery = "conditionalQuery",
  agencyQuery = "agencyQuery",
  createMutation = "createMutation",
  updateMutation = "updateMutation",
  deleteMutation = "deleteMutation",
}

export const psqlCalls = {
  nodeQuery: nodeQuery,
  idQuery: idQuery,
  conditionalQuery: conditionalQuery,
  agencyQuery: agencyQuery,
  createMutation: createMutation,
  updateMutation: updateMutation,
  deleteMutation: deleteMutation,
};
