export const mutation = `mutation deleteAgencyfavorite($resourceId: Int , $clientMutationId: String!) {
        __typename
        deleteAgencyfavorite(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     