export const mutation = `mutation updateTouristfavorite($id: Int , $clientMutationId: String!) {
        __typename
        updateTouristfavorite(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     