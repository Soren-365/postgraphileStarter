export const query = `query getAgencyauctioninfos($atAgency: Int!, $id: Int) {
        __typename
        auctioninfos(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id publishedById createdById advertisedPrice currentHighBid bidId acceptsOffers auctionExpiry isAuction isActive atResourceType belongsToId timeCreated

          }
        }
      }`
      export default `${query}`
     