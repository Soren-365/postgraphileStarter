export const mutation = `mutation deleteTouristdeal($id: Int , $id: String!) {
        __typename
        deleteTouristdeal(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     