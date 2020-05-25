export const mutation = `mutation createTimerange(, $clientMutationId: String!) {
        __typename
        createTimerange(input: {clientMutationId: $clientMutationId,timerange: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     