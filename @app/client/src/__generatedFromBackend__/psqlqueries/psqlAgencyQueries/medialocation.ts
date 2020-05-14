export const query = `query getAgencymedialocations($atAgency: Int!, $id: Int) {
        __typename
        medialocations(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id mediaLocationPlacement atAgency atResource uploadLocationOriginal uploadLocationThumbnail uploadLocationMobile uploadLocationTablet uploadLocationDesktop uploadLocation2K signedUrlThumbnail signedUrlMobile signedUrlTablet signedUrlDesktop signedUrl2K signedUrlsUpdate timeCreated

          }
        }
      }`
      export default `${query}`
     