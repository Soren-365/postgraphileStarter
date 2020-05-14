export const query = `query getConditionalAgencymedialibrary(, $atAgency:  number , $lastModifiedBy:  number , $undefined:  string ) {
        __typename
        agencymedialibraries(condition: {,atAgency: $atAgency ,,,,lastModifiedBy: $lastModifiedBy ,,undefined: $undefined  })  {
          nodes {
            id atAgency uploadLocations locationSignedUrls signedUrlsUpdate lastModifiedBy timeCreated
 
          }
        }
      }`
      export default `${query}`
        