import { execute, makePromise } from "apollo-link";
import gql from "graphql-tag";

import { DbTables } from "../../__generatedFromBackend__/tableEnums";
import { getCreateMutation } from "../../../__generatedFromBackend__/psqlmutations/getCreateMutation";
import {
  ApolloLinked,
  CreateMutationType,
} from "../../controllers/commControl";

export function psqlcreateMutation({
  tableKey,
  variables,
}: CreateMutationType) {
  // console.log(' tableKey, variables', tableKey, variables)
  const variablesTypes = DbTables[tableKey];
  const { query } = getCreateMutation(variablesTypes);
  const variablesDestructured = variables[tableKey];
  const clientMutationId = Date().toString();
  const variablesToSend = { ...variablesDestructured, clientMutationId };
  console.log("variables destructured", variablesDestructured);
  console.log("variables to send", variablesToSend);
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
