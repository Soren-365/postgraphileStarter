export const query = `query getConditionalMedialocation() {
        __typename
        medialocations(condition: {,,,,,,,,,,,,,,,,, })  {
          nodes {
            id mediaLocationPlacement atAgency atResource uploadLocationOriginal uploadLocationThumbnail uploadLocationMobile uploadLocationTablet uploadLocationDesktop uploadLocation2K signedUrlThumbnail signedUrlMobile signedUrlTablet signedUrlDesktop signedUrl2K signedUrlsUpdate timeCreated
 
          }
        }
      }`
      export default `${query}`
        