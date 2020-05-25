export const query = `query Priceinfo($id: Int!) {
        __typename
        priceinfo(id: $id) {
            id publisherId createdById advertisedPrice currentHighBId bidId acceptsOffers auctionExpiry isAuction isActive atResourceType belongsToId lastModified timeCreated

        }
      }`
      export default `${query}`
