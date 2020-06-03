export const query = `query getConditionalPosts(, $undefined:  undefined ) {
        __typename
        postss(condition: {undefined: $undefined ,,,,,, })  {
          nodes {
            id author_id headline body topic created_at updated_at

          }
        }
      }`
      export default `${query}`
        