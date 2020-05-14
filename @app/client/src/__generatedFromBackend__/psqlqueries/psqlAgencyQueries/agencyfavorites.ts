export const query = `query getAgencyagencyfavorites($atAgency: Int!) {
        __typename
        agencyfavorites(condition: {atAgency: $atAgency }) {
          nodes {
            resourceId,resourceType,atAgency

          }
        }
      }`
      export default `${query}`
     