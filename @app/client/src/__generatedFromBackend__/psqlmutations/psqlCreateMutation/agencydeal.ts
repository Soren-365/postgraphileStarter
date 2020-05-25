export const mutation = `mutation createAgencydeal(, $clientMutationId: String!) {
        __typename
        createAgencydeal(input: {clientMutationId: $clientMutationId,agencydeal: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     