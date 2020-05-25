export const query = `query Medialocation($id: Int!) {
        __typename
        medialocation(id: $id) {
            id mediaLocationPlacement atAgency atResource uploadLocationOriginal uploadLocationThumbnail uploadLocationMobile uploadLocationTablet uploadLocationDesktop uploadLocation2K signedUrlThumbnail signedUrlMobile signedUrlTablet signedUrlDesktop signedUrl2K signedUrlsUpdate timeCreated

        }
      }`
      export default `${query}`
