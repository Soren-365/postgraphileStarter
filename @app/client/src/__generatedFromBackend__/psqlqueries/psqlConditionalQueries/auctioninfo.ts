export const query = `query getConditionalAuctioninfo(, $undefined:  undefined ) {
        __typename
        auctioninfos(condition: {undefined: $undefined ,,,,,,,,,,,, })  {
          nodes {
            id publishedById createdById advertisedPrice currentHighBid bidId acceptsOffers auctionExpiry isAuction isActive atResourceType belongsToId timeCreated

          }
        }
      }`
      export default `${query}`
        