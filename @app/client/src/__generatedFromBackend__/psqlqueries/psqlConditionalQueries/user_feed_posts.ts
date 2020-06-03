export const query = `query getConditionalUser_feed_posts(, $undefined:  undefined ) {
        __typename
        user_feed_postss(condition: {undefined: $undefined ,,, })  {
          nodes {
            id user_id post_id created_at

          }
        }
      }`
      export default `${query}`
        