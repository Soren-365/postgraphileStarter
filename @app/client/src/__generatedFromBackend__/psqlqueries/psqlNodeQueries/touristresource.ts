export const query = `query getNodetouristresource($nodeId: String!) {
        __typename
        touristresourceByNodeId(nodeId: $nodeId }) { 
            id name contactId publisherId createdById atTravelGroup atAgency atGuide isSigned priceInfoId travellingCalendarId isRomanian isActive isPublic lastModified

        }
      }`
      export default `${query}`
     