export const mutation = `mutation deleteTourist($id: Int , $clientMutationId: String!) {
        __typename
        deleteTourist(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     