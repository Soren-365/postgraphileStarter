export const mutation = `mutation updateLibrary($id: Int ,$bookCathegories: [Bookcathegories] ,$numberOfBook: Int! ,$userId: Int , $clientMutationId: String!) {
        __typename
        updateLibrary(input: {clientMutationId: $clientMutationId, patch: {,bookCathegories: $bookCathegories ,numberOfBook: $numberOfBook ,userId: $userId }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     