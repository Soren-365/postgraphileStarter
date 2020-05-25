export const query = `query Auctioninfo($id: Int!) {
        __typename
        auctioninfo(id: $id) {
            id publishedById createdById advertisedPrice currentHighBid bidId acceptsOffers auctionExpiry isAuction isActive atResourceType belongsToId timeCreated

        }
      }`
      export default `${query}`
