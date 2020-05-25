export const mutation = `mutation createAccount(, $clientMutationId: String!) {
        __typename
        createAccount(input: {clientMutationId: $clientMutationId,account: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     