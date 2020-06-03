export const mutation = `mutation updateAgencyfavorite($resourceId: Int ,$resourceType: Resourcetype ,$atAgency: Int , $id: String!) {
        __typename
        updateAgencyfavorite(input: {id: $id, patch: {resourceId: $resourceId ,resourceType: $resourceType ,atAgency: $atAgency }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     