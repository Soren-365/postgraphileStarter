export const query = `query getNodeguideresource($nodeId: String!) {
        __typename
        guideresourceByNodeId(nodeId: $nodeId }) { 
            id guideResourceName publisherId createdById atGuide timeRangeId priceInfoId atAgency multipleTimeRange bookingCalendarId isRomanian isActive isPublic lastModified

        }
      }`
      export default `${query}`
     