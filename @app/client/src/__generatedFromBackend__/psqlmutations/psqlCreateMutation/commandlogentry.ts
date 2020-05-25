export const mutation = `mutation createCommandlogentry(, $clientMutationId: String!) {
        __typename
        createCommandlogentry(input: {clientMutationId: $clientMutationId,commandlogentry: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     