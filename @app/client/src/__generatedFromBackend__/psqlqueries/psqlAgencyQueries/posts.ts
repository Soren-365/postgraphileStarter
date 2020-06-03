export const query = `query getAgencypostss($atAgency: Int!, $id: Int) {
        __typename
        postss(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id author_id headline body topic created_at updated_at

          }
        }
      }`
      export default `${query}`
     