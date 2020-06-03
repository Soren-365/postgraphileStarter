export const mutation = `mutation createAgencyfavorite($resourceId: Int ,$resourceType: Resourcetype ,$atAgency: Int , $id: String!) {
        __typename
        createAgencyfavorite(input: {id: $id,agencyfavorite: {resourceId: $resourceId ,resourceType: $resourceType ,atAgency: $atAgency }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     