export const query = `query getAgencyagencydeals($atAgency: Int!, $id: Int) {
        __typename
        agencydeals(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     