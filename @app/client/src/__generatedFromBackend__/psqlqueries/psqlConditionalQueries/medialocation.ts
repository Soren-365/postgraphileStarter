export const query = `query getConditionalMedialocation(, $undefined:  undefined , $undefined:  undefined , $undefined:  undefined ) {
        __typename
        medialocations(condition: {,undefined: $undefined ,undefined: $undefined ,undefined: $undefined ,,,,,,,,,,,,, })  {
          nodes {
            id mediaLocationPlacement atAgency atResource uploadLocationOriginal uploadLocationThumbnail uploadLocationMobile uploadLocationTablet uploadLocationDesktop uploadLocation2K signedUrlThumbnail signedUrlMobile signedUrlTablet signedUrlDesktop signedUrl2K signedUrlsUpdate timeCreated

          }
        }
      }`
      export default `${query}`
        