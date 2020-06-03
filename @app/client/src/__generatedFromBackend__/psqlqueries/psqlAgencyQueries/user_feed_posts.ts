export const query = `query getAgencyuser_feed_postss($atAgency: Int!, $id: Int) {
        __typename
        user_feed_postss(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id user_id post_id created_at

          }
        }
      }`
      export default `${query}`
     