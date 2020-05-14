export const mutation = `mutation createBook($id: Int ,$publishedYear: Int ,$priceOfAquisition: Int , $clientMutationId: String!) {
        __typename
        createBook(input: {clientMutationId: $clientMutationId,book: {,publishedYear: $publishedYear ,priceOfAquisition: $priceOfAquisition }}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     