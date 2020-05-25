export const query = `query getConditionalPosts(, $id:  number ) {
        __typename
        postss(condition: {id: $id ,,,,, })  {
          nodes {
            id author_id headline body topic created_at

          }
        }
      }`
      export default `${query}`
        