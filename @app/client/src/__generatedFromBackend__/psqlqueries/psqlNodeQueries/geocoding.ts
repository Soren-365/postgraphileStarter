export const query = `query getNodegeocoding($nodeId: String!) {
        __typename
        geocodingByNodeId(nodeId: $nodeId }) { 
            id locationLat locationLng locationType placesId formattedAdress type viewportNorthEastLat viewportNorthEastLng viewportSouthWestLat viewportSouthWestLng createdById publishedById lastModified timeCreated

        }
      }`
      export default `${query}`
     