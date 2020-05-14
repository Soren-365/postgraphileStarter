export const query = `query getAgencyagencybids($atAgency: Int!) {
        __typename
        agencybids(condition: {atAgency: $atAgency }) {
          nodes {
            id,agencyId

          }
        }
      }`
      export default `${query}`
     