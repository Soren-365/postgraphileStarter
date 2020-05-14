import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, execute, makePromise } from "apollo-link";
import { ErrorLink } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

import { DbTables } from "../__generatedFromBackend__/tableEnums";
import { getCreateMutation } from "../../__generatedFromBackend__/psqlmutations/getCreateMutation";
import { getDeleteMutation } from "../../__generatedFromBackend__/psqlmutations/getDeleteMutation";
import {
  getUpdateMutation,
  LookupType,
} from "../../__generatedFromBackend__/psqlmutations/getUpdateMutation";
import { destinationresourceDbType } from "../../dexie/dbTypes/__generatedFromBackend__/types/destinationresourceDbType";
import { DestinationresourceClassType } from "../../dexie/transformations/__generatedFromBackend__/types/DestinationresourceDbTransformation";
import { MutationType, mutationTypes } from "../controllers/commControl";

export function updateFetchVarTypes(tableKey: string) {
  const variablesTypes = DbTables[tableKey];
  const getTypesFromEmpty = getUpdateMutation(variablesTypes);
  return getTypesFromEmpty;
}

export function mutation({ mutationType, tableKey, variables }: MutationType) {
  // console.log("updateQuery")
  console.log(
    "mutationType, tableKey, variables",
    mutationType,
    tableKey,
    variables
  );
  //     const query = `
  // query Agencies {
  //     agencies {
  //       totalCount
  //       nodes {
  //         agencyId

  //       }
  //     }
  //   }
  // `

  //  console.log('queryNameAsString:', queryNameAsString)
  // const key = 'destinationresource'

  const Httplink = new HttpLink({
    uri: "http://localhost:5002/graphql",
    credentials: "omit",
  });

  const link = ApolloLink.from([
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

  const variablesTypes = DbTables[tableKey];

  let returned = { query: "", getTypesFromEmpty: {} };
  let query: string = "";

  switch (mutationType) {
    case mutationTypes.create:
      returned = getCreateMutation(variablesTypes);
      query = returned.query;
      break;
    case mutationTypes.update:
      returned = getUpdateMutation(variablesTypes);
      query = returned.query;

      break;
    case mutationTypes.delete:
      returned = getDeleteMutation(variablesTypes);
      query = returned.query;
      break;

    default:
      console.log(
        "Big error! This is not possible, in fetch/updateMutation.ts"
      );

      break;
    // code block
  }

  const variablesDestructured = variables[tableKey];
  const clientMutationId = Date.now().toLocaleString();
  const variablesToSend = { ...variablesDestructured, clientMutationId };
  //console.log("Input to nodeFetch, tableKey, variables:", tableKey, variablesDestructured)

  // // a query with apollo-client
  //  query = apolloclient.query({
  //     query: MY_QUERY,
  //     context: {
  //         // example of setting the headers with context per operation
  //         headers: {
  //             special: 'Special header value',
  //         },
  //     },
  // })

  const operation = {
    query: gql`
      ${query}
    `,
    variables: variablesToSend, //optional
    context: {}, //optional
    extensions: {}, //optional
  };

  // execute returns an Observable so it can be subscribed to
  //   execute(link, operation).subscribe({
  //     next: data => console.log(`received data: ${JSON.stringify(data, null, 2)}`),
  //     error: error => console.log(`received error ${error}`),
  //     complete: () => console.log(`complete`),
  //   })

  return makePromise(execute(link, operation))
    .then((data) =>
      console.log(
        `received data in updateQuery!: ${JSON.stringify(data, null, 2)}`
      )
    )
    .catch((error) => console.log(`received error in updateQuery!: ${error}`));
  // return  makePromise(execute(link, operation))
  // .then(data => console.log(`received data in updateQuery!: ${JSON.stringify(data, null, 2)}`))
  // .catch(error => console.log(`received error in updateQuery!: ${error}`))
}
