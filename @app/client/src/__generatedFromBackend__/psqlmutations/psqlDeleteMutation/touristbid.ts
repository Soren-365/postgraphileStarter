export const mutation = `mutation deleteTouristbid($id: Int , $id: String!) {
        __typename
        deleteTouristbid(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     