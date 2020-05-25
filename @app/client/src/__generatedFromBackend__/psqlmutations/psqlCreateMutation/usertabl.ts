export const mutation = `mutation createUsertabl(, $clientMutationId: String!) {
        __typename
        createUsertabl(input: {clientMutationId: $clientMutationId,usertabl: {}}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     