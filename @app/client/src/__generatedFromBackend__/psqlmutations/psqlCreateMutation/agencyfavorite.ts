export const mutation = `mutation createAgencyfavorite($resourceId: Int ,$resourceType: Resourcetype ,$atAgency: Int , $clientMutationId: String!) {
        __typename
        createAgencyfavorite(input: {clientMutationId: $clientMutationId,agencyfavorite: {resourceId: $resourceId ,resourceType: $resourceType ,atAgency: $atAgency }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     