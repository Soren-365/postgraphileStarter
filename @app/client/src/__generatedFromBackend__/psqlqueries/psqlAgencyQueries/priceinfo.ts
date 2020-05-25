export const query = `query getAgencypriceinfos($atAgency: Int!, $id: Int) {
        __typename
        priceinfos(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id publisherId createdById advertisedPrice currentHighBId bidId acceptsOffers auctionExpiry isAuction isActive atResourceType belongsToId lastModified timeCreated

          }
        }
      }`
      export default `${query}`
     