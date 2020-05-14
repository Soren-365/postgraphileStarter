export const query = `query getNodepriceinfo($nodeId: String!) {
        __typename
        priceinfoByNodeId(nodeId: $nodeId }) { 
            id publisherId createdById advertisedPrice currentHighBId bidId acceptsOffers auctionExpiry isAuction isActive atResourceType belongsToId lastModified

        }
      }`
      export default `${query}`
     