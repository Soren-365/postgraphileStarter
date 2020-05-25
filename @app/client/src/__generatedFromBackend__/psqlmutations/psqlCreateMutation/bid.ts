export const mutation = `mutation createBid(, $clientMutationId: String!) {
        __typename
        createBid(input: {clientMutationId: $clientMutationId,bid: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     