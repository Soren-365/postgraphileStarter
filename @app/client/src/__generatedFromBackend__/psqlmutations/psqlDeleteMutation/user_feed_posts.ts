export const mutation = `mutation deleteUser_feed_posts($id: Int , $id: String!) {
        __typename
        deleteUser_feed_posts(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     