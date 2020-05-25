export const mutation = `mutation createTouristbid(, $clientMutationId: String!) {
        __typename
        createTouristbid(input: {clientMutationId: $clientMutationId,touristbid: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     