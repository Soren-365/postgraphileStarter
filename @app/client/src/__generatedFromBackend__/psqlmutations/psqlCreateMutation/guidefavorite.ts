export const mutation = `mutation createGuidefavorite(, $clientMutationId: String!) {
        __typename
        createGuidefavorite(input: {clientMutationId: $clientMutationId,guidefavorite: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     