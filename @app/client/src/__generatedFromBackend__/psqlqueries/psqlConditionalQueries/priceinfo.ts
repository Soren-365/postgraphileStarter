export const query = `query getConditionalPriceinfo(, $id:  number , $publisherId:  number , $createdById:  number , $bidId:  number ) {
        __typename
        priceinfos(condition: {id: $id ,publisherId: $publisherId ,createdById: $createdById ,,,bidId: $bidId ,,,,,,,, })  {
          nodes {
            id publisherId createdById advertisedPrice currentHighBId bidId acceptsOffers auctionExpiry isAuction isActive atResourceType belongsToId lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        