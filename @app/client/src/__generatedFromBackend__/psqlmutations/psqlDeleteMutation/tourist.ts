export const mutation = `mutation deleteTourist($id: Int , $id: String!) {
        __typename
        deleteTourist(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     