export const mutation = `mutation updateTouristbid($id: Int , $clientMutationId: String!) {
        __typename
        updateTouristbid(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     