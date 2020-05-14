export const mutation = `mutation deleteTripofferresource($id: Int , $clientMutationId: String!) {
        __typename
        deleteTripofferresource(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     