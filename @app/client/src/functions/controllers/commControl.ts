import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-link";
import { ErrorLink } from "apollo-link-error";
import { createHttpLink, HttpLink } from "apollo-link-http";
import { call, put } from "redux-saga/effects";

// import { API } from 'src/redux/types/types'
import { DbTables } from "../__generatedFromBackend__/tableEnums";
import {
  createMutationType,
  getCreateMutation,
} from "../../__generatedFromBackend__/psqlmutations/getCreateMutation";
import { deleteMutationType } from "../../__generatedFromBackend__/psqlmutations/getDeleteMutation";
import { updateMutationType } from "../../__generatedFromBackend__/psqlmutations/getUpdateMutation";
import clientDB from "../../db/dexieDBgenerated";
import { clientDbI } from "../../redux/sagas/dbSaga";
import {
  psqlAgencyQuery,
  psqlConditionedQuery,
  psqlCreateMutation,
  psqlDeleteMutation,
  psqlIdQuery,
  psqlMutation,
  psqlNodeQuery,
  psqlUpdateMutation,
} from "./commHelper";

export const Httplink = new HttpLink({
  uri: "http://localhost:5002/graphql",
  credentials: "omit",
});

export const ApolloLinked = ApolloLink.from([
  new ErrorLink(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  }),
  Httplink,
]);

export enum mutationTypes {
  update = "update",
  create = "create",
  delete = "delete",
}

export interface MutationType {
  mutationType: mutationTypes;
  tableKey: DbTables;
  variables: any;
}

export interface CreateMutationType {
  tableKey: DbTables;
  variables: any;
}

export interface UpdateMutationType {
  tableKey: DbTables;
  variables: any;
}

export interface DeleteMutationType {
  tableKey: DbTables;
  variables: any;
}

export interface IdQueryType {
  tableKey: DbTables;
  variables: { id: number };
}

export interface NodeQueryType {
  tableKey: DbTables;
  variables: { nodeId: string };
}

export interface ConditionedQueryType {
  tableKey: DbTables;
  variables: any;
}

export interface AgencyQueryType {
  tableKey: DbTables;
  variables: any;
}

class comC {
  // updateQuery: ({
  //     tableKey,
  //     variables,
  // }: QueryType) => Promise<void | Response>

  comCDb: clientDB;
  initApolloLink: any;
  psqlCreateMutation: ({
    tableKey,
    variables,
  }: CreateMutationType) => Generator<any, { clientMutationId: any }, unknown>;

  psqlUpdateMutation: ({
    tableKey,
    variables,
  }: UpdateMutationType) => Generator<any, { clientMutationId: any }, unknown>;

  psqlDeleteMutation: ({
    tableKey,
    variables,
  }: DeleteMutationType) => Generator<any, { clientMutationId: any }, unknown>;

  psqlMutation: ({
    mutationType,
    tableKey,
    variables,
  }: MutationType) => Generator<any, { clientMutationId: any }, unknown>;

  psqlIdQuery: ({
    tableKey,
    variables,
  }: IdQueryType) => Generator<any, any, unknown>;

  psqlNodeQuery: ({
    tableKey,
    variables,
  }: NodeQueryType) => Generator<any, any, unknown>;

  psqlConditionedQuery: ({
    tableKey,
    variables,
  }: ConditionedQueryType) => Generator<any, any, unknown>;

  psqlAgencyQuery: ({
    tableKey,
    variables,
  }: AgencyQueryType) => Generator<any, any, unknown>;

  store: any;

  getCreateMutation: (
    DbTablesSelection: keyof typeof DbTables
  ) => ReturnType<any>;

  constructor() {
    const comCDb = new clientDB();
    this.comCDb = comCDb;
    this.psqlCreateMutation = psqlCreateMutation;
    this.psqlUpdateMutation = psqlUpdateMutation;
    this.psqlDeleteMutation = psqlDeleteMutation;
    this.psqlMutation = psqlMutation;
    this.getCreateMutation = getCreateMutation;
    this.psqlIdQuery = psqlIdQuery;
    this.psqlNodeQuery = psqlNodeQuery;
    this.psqlAgencyQuery = psqlAgencyQuery;
    this.psqlConditionedQuery = psqlConditionedQuery;
  }

  // static updateType(DbTablesSelection: keyof typeof DbTables) {
  //     let { query, getTypesFromEmpty } = getUpdateMutation('eventresource')

  //     return getUpdateMutation
  // }
}

export default comC;
