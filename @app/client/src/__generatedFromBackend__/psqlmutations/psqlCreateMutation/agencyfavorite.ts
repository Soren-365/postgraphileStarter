export const mutation = `mutation createAgencyfavorite($resourceId: Int , $clientMutationId: String!) {
        __typename
        createAgencyfavorite(input: {clientMutationId: $clientMutationId,agencyfavorite: {resourceId: $resourceId }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     