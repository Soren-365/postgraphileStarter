export const mutation = `mutation deleteTouristoffer($id: Int , $id: String!) {
        __typename
        deleteTouristoffer(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     