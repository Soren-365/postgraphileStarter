export const query = `query getAgencyagencymedialibraries($atAgency: Int!) {
        __typename
        agencymedialibraries(condition: {atAgency: $atAgency }) {
          nodes {
            id,atAgency,uploadLocations,locationSignedUrls,signedUrlsUpdate,lastModifiedBy,timeCreated

          }
        }
      }`
      export default `${query}`
     