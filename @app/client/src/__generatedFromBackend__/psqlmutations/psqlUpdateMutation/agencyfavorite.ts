export const mutation = `mutation updateAgencyfavorite($resourceId: Int ,$resourceType: Resourcetype ,$atAgency: Int , $clientMutationId: String!) {
        __typename
        updateAgencyfavorite(input: {clientMutationId: $clientMutationId, patch: {resourceId: $resourceId ,resourceType: $resourceType ,atAgency: $atAgency }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     