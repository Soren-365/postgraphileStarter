export const mutation = `mutation deleteTouristfavorite($id: Int , $id: String!) {
        __typename
        deleteTouristfavorite(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     