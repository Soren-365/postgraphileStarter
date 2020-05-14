export const mutation = `mutation updateBook($id: Int ,$publishedYear: Int ,$priceOfAquisition: Int , $clientMutationId: String!) {
        __typename
        updateBook(input: {clientMutationId: $clientMutationId, patch: {,publishedYear: $publishedYear ,priceOfAquisition: $priceOfAquisition }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     