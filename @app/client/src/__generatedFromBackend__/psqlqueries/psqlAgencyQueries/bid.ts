export const query = `query getAgencybids($atAgency: Int!, $id: Int) {
        __typename
        bids(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     