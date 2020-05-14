export const query = `query getNodeauctioninfo($nodeId: String!) {
        __typename
        auctioninfoByNodeId(nodeId: $nodeId }) { 
            id publishedById createdById advertisedPrice currentHighBid bidId acceptsOffers auctionExpiry isAuction isActive atResourceType belongsToId

        }
      }`
      export default `${query}`
     