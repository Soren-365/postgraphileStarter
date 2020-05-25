export const mutation = `mutation createTouristoffer(, $clientMutationId: String!) {
        __typename
        createTouristoffer(input: {clientMutationId: $clientMutationId,touristoffer: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     