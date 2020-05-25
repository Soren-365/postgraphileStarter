export const mutation = `mutation createTouristdeal(, $clientMutationId: String!) {
        __typename
        createTouristdeal(input: {clientMutationId: $clientMutationId,touristdeal: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     