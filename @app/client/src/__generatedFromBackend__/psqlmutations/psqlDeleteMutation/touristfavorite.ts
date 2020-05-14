export const mutation = `mutation deleteTouristfavorite($id: Int , $clientMutationId: String!) {
        __typename
        deleteTouristfavorite(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     