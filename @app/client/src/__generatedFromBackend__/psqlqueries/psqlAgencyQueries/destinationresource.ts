export const query = `query getAgencydestinationresources($atAgency: Int!, $id: Int) {
        __typename
        destinationresources(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id destinationName publishedById createdById area judet tripTypeName isActive priceInfoId activeAtPeriodsId presentationId atAgency geoCodingId isPublic lastModified lastModifiedBy

          }
        }
      }`
      export default `${query}`
     