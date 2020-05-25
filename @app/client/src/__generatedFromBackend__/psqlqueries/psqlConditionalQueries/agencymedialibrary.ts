export const query = `query getConditionalAgencymedialibrary(, $atAgency:  number , $lastModifiedBy:  number , $lastModified:  string ) {
        __typename
        agencymedialibraries(condition: {,atAgency: $atAgency ,,,,lastModifiedBy: $lastModifiedBy ,,lastModified: $lastModified  })  {
          nodes {
            id atAgency uploadLocations locationSignedUrls signedUrlsUpdate lastModifiedBy timeCreated lastModified

          }
        }
      }`
      export default `${query}`
        