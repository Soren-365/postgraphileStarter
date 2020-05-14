export const query = `query getAgencyguidebids($atAgency: Int!, $id: Int) {
        __typename
        guidebids(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     