export const mutation = `mutation deletePosts($id: Int , $id: String!) {
        __typename
        deletePosts(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     