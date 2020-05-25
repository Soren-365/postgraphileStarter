export const mutation = `mutation createTouristfavorite(, $clientMutationId: String!) {
        __typename
        createTouristfavorite(input: {clientMutationId: $clientMutationId,touristfavorite: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     