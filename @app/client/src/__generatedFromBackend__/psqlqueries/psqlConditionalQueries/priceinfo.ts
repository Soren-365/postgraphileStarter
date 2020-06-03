export const query = `query getConditionalPriceinfo(, $undefined:  undefined ) {
        __typename
        priceinfos(condition: {undefined: $undefined ,,,,,,,,,,,,, })  {
          nodes {
            id publisherId createdById advertisedPrice currentHighBId bidId acceptsOffers auctionExpiry isAuction isActive atResourceType belongsToId lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        