export const query = `query getAgencypriceinfos($atAgency: Int!) {
        __typename
        priceinfos(condition: {atAgency: $atAgency }) {
          nodes {
            id,publisherId,createdById,advertisedPrice,currentHighBId,bidId,acceptsOffers,auctionExpiry,isAuction,isActive,atResourceType,belongsToId,lastModified

          }
        }
      }`
      export default `${query}`
     