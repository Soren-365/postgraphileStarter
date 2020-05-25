export const query = `query getConditionalUser_feed_posts(, $id:  number ) {
        __typename
        user_feed_postss(condition: {id: $id ,, })  {
          nodes {
            id user_id post_id

          }
        }
      }`
      export default `${query}`
        