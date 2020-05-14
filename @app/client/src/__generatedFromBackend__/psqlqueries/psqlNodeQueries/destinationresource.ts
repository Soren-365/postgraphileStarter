export const query = `query getNodedestinationresource($nodeId: String!) {
        __typename
        destinationresourceByNodeId(nodeId: $nodeId }) { 
            id destinationName publishedById createdById area judet tripTypeName isActive priceInfoId activeAtPeriodsId presentationId atAgency geoCodingId isPublic lastModified lastModifiedBy

        }
      }`
      export default `${query}`
     