export const query = `query getConditionalAgencymedialibrary() {
        __typename
        agencymedialibraries(condition: {,,,,,,, })  {
          nodes {
            id atAgency uploadLocations locationSignedUrls signedUrlsUpdate lastModifiedBy timeCreated lastModified

          }
        }
      }`
      export default `${query}`
        