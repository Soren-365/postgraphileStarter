import { ApolloLink, execute, makePromise } from "apollo-link";
import { ErrorLink } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

import { DbTables } from "../../__generatedFromBackend__/tableEnums";
import { getDeleteMutation } from "../../../__generatedFromBackend__/psqlmutations/getDeleteMutation";
import { getIdQuery } from "../../../__generatedFromBackend__/psqlqueries/getIdQuery";
import { getNodeQuery } from "../../../__generatedFromBackend__/psqlqueries/getNodeQuery";
import {
  ApolloLinked,
  DeleteMutationType,
  NodeQueryType,
} from "../../controllers/commControl";

export function psqlnodeQuery({ tableKey, variables }: NodeQueryType) {
  //  console.log(' tableKey, variables', tableKey, variables)

  const variablesTypes = DbTables[tableKey];
  const { query } = getNodeQuery(variablesTypes);
  const variablesDestructured = variables[tableKey];

  const operation = {
    query: gql`
      ${query}
    `,
    variables: variablesDestructured, //optional
    context: {}, //optional
    extensions: {}, //optional
  };

  return makePromise(execute(ApolloLinked, operation))
    .then((data) => {
      console.log(
        `received data in updateQuery!: ${JSON.stringify(data, null, 2)}`
      );
      return data;
    })
    .catch((error) => console.log(`received error in updateQuery!: ${error}`));
}
