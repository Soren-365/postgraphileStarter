export const query = `query Destinationresource($id: Int!) {
        __typename
        destinationresource(id: $id) {
            id destinationName publishedById createdById area judet tripTypeName isActive priceInfoId activeAtPeriodsId presentationId atAgency geoCodingId isPublic lastModified lastModifiedBy
 
        }
      }`
      export default `${query}`
