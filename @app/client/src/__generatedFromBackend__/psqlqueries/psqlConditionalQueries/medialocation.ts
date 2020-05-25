export const query = `query getConditionalMedialocation(, $atAgency:  number , $atResource:  number , $uploadLocationOriginal:  string , $uploadLocationThumbnail:  string , $timeCreated:  string ) {
        __typename
        medialocations(condition: {,,atAgency: $atAgency ,atResource: $atResource ,uploadLocationOriginal: $uploadLocationOriginal ,uploadLocationThumbnail: $uploadLocationThumbnail ,,,,,,,,,,,timeCreated: $timeCreated  })  {
          nodes {
            id mediaLocationPlacement atAgency atResource uploadLocationOriginal uploadLocationThumbnail uploadLocationMobile uploadLocationTablet uploadLocationDesktop uploadLocation2K signedUrlThumbnail signedUrlMobile signedUrlTablet signedUrlDesktop signedUrl2K signedUrlsUpdate timeCreated

          }
        }
      }`
      export default `${query}`
        