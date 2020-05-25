export const mutation = `mutation createGuidebid(, $clientMutationId: String!) {
        __typename
        createGuidebid(input: {clientMutationId: $clientMutationId,guidebid: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     