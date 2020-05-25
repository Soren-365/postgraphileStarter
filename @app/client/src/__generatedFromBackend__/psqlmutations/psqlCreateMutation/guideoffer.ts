export const mutation = `mutation createGuideoffer(, $clientMutationId: String!) {
        __typename
        createGuideoffer(input: {clientMutationId: $clientMutationId,guideoffer: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     