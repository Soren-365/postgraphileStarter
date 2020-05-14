export const query = `query getNodeagencymedialibrary($nodeId: String!) {
        __typename
        agencymedialibraryByNodeId(nodeId: $nodeId }) { 
            id atAgency uploadLocations locationSignedUrls signedUrlsUpdate lastModifiedBy timeCreated

        }
      }`
      export default `${query}`
     