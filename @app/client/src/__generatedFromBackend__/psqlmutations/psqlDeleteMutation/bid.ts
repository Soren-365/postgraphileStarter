export const mutation = `mutation deleteBid($id: Int , $clientMutationId: String!) {
        __typename
        deleteBid(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     