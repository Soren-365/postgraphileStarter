export const mutation = `mutation deleteTouristresource($id: Int , $clientMutationId: String!) {
        __typename
        deleteTouristresource(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     