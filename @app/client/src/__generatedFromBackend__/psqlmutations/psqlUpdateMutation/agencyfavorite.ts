export const mutation = `mutation updateAgencyfavorite($resourceId: Int , $clientMutationId: String!) {
        __typename
        updateAgencyfavorite(input: {clientMutationId: $clientMutationId, patch: {resourceId: $resourceId }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     