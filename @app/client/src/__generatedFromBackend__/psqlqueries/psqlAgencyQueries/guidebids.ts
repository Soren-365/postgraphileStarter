export const query = `query getAgencyguidebids($atAgency: Int!) {
        __typename
        guidebids(condition: {atAgency: $atAgency }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     