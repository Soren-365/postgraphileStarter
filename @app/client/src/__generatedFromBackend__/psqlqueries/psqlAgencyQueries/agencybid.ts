export const query = `query getAgencyagencybids($atAgency: Int!, $id: Int) {
        __typename
        agencybids(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id agencyId

          }
        }
      }`
      export default `${query}`
     