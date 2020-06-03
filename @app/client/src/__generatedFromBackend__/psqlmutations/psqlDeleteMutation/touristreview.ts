export const mutation = `mutation deleteTouristreview($id: Int , $id: String!) {
        __typename
        deleteTouristreview(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     