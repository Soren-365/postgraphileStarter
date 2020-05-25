export const query = `query getAgencyagencyfavorites($atAgency: Int!, $id: Int) {
        __typename
        agencyfavorites(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            resourceId

          }
        }
      }`
      export default `${query}`
     