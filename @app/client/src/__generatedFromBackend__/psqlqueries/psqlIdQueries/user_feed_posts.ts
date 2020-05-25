export const query = `query User_feed_posts($id: Int!) {
        __typename
        user_feed_posts(id: $id) {
            id user_id post_id

        }
      }`
      export default `${query}`
