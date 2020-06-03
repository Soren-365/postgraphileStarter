export const query = `query getAgencytopicss($atAgency: Int!, $id: Int) {
        __typename
        topicss(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            title

          }
        }
      }`
      export default `${query}`
     