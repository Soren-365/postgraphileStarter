export const mutation = `mutation createGuidedeal(, $clientMutationId: String!) {
        __typename
        createGuidedeal(input: {clientMutationId: $clientMutationId,guidedeal: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     