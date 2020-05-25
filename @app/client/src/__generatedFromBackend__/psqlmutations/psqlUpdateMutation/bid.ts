export const mutation = `mutation updateBid($id: Int , $clientMutationId: String!) {
        __typename
        updateBid(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     