export const query = `query getConditionalAuctioninfo(, $id:  number , $publishedById:  number , $createdById:  number , $bidId:  number ) {
        __typename
        auctioninfos(condition: {id: $id ,publishedById: $publishedById ,createdById: $createdById ,,,bidId: $bidId ,,,,,,, })  {
          nodes {
            id publishedById createdById advertisedPrice currentHighBid bidId acceptsOffers auctionExpiry isAuction isActive atResourceType belongsToId timeCreated

          }
        }
      }`
      export default `${query}`
        