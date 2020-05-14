export const query = `query getAgencyagencymedialibraries($atAgency: Int!, $id: Int) {
        __typename
        agencymedialibraries(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id atAgency uploadLocations locationSignedUrls signedUrlsUpdate lastModifiedBy timeCreated

          }
        }
      }`
      export default `${query}`
     