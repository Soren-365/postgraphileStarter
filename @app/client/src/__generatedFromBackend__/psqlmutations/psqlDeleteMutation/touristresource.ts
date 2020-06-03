export const mutation = `mutation deleteTouristresource($id: Int , $id: String!) {
        __typename
        deleteTouristresource(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     