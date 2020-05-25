export const query = `query getNodemedialocation($nodeId: String!) {
        __typename
        medialocationByNodeId(nodeId: $nodeId }) {
            id mediaLocationPlacement atAgency atResource uploadLocationOriginal uploadLocationThumbnail uploadLocationMobile uploadLocationTablet uploadLocationDesktop uploadLocation2K signedUrlThumbnail signedUrlMobile signedUrlTablet signedUrlDesktop signedUrl2K signedUrlsUpdate timeCreated

        }
      }`
      export default `${query}`
     