import { ApolloLink, execute, makePromise } from "apollo-link";
import { ErrorLink } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

import { DbTables } from "../../__generatedFromBackend__/tableEnums";
import { getDeleteMutation } from "../../../__generatedFromBackend__/psqlmutations/getDeleteMutation";
import {
  ApolloLinked,
  DeleteMutationType,
} from "../../controllers/commControl";

export function psqldeleteMutation({
  tableKey,
  variables,
}: DeleteMutationType) {
  //  console.log(' tableKey, variables', tableKey, variables)
  const variablesTypes = DbTables[tableKey];
  const { query } = getDeleteMutation(variablesTypes);
  const variablesDestructured = variables[tableKey];
  const clientMutationId = Date.now().toLocaleString();
  const variablesToSend = { ...variablesDestructured, clientMutationId };

  const operation = {
    query: gql`
      ${query}
    `,
    variables: variablesToSend, //optional
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
