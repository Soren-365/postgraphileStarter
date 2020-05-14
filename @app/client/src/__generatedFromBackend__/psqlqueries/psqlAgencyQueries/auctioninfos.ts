export const query = `query getAgencyauctioninfos($atAgency: Int!) {
        __typename
        auctioninfos(condition: {atAgency: $atAgency }) {
          nodes {
            id,publishedById,createdById,advertisedPrice,currentHighBid,bidId,acceptsOffers,auctionExpiry,isAuction,isActive,atResourceType,belongsToId

          }
        }
      }`
      export default `${query}`
     