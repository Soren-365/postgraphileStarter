export const mutation = `mutation createLibrary($id: Int ,$bookCathegories: [Bookcathegories] ,$numberOfBook: Int! ,$userId: Int , $clientMutationId: String!) {
        __typename
        createLibrary(input: {clientMutationId: $clientMutationId,library: {,bookCathegories: $bookCathegories ,numberOfBook: $numberOfBook ,userId: $userId }}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     