export const query = `query getAgencydestinationresources($atAgency: Int!) {
        __typename
        destinationresources(condition: {atAgency: $atAgency }) {
          nodes {
            id,destinationName,publishedById,createdById,area,judet,tripTypeName,isActive,priceInfoId,activeAtPeriodsId,presentationId,atAgency,geoCodingId,isPublic,lastModified,lastModifiedBy

          }
        }
      }`
      export default `${query}`
     