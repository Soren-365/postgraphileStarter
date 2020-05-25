export const query = `query getAgencytouristdeals($atAgency: Int!, $id: Int) {
        __typename
        touristdeals(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     