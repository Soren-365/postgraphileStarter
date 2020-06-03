export const mutation = `mutation deletePublisher($id: Int , $id: String!) {
        __typename
        deletePublisher(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     