export const mutation = `mutation createAgencybid(,$agencyId: Int , $clientMutationId: String!) {
        __typename
        createAgencybid(input: {clientMutationId: $clientMutationId,agencybid: {,agencyId: $agencyId }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     