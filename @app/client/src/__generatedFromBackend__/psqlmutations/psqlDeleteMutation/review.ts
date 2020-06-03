export const mutation = `mutation deleteReview($id: Int , $id: String!) {
        __typename
        deleteReview(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     