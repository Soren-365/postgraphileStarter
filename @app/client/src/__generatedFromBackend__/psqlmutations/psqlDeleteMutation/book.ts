export const mutation = `mutation deleteBook($id: Int , $clientMutationId: String!) {
        __typename
        deleteBook(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     