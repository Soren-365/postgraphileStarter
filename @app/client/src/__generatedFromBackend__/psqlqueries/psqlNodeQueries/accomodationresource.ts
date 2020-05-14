export const query = `query getNodeaccomodationresource($nodeId: String!) {
        __typename
        accomodationresourceByNodeId(nodeId: $nodeId }) { 
            id accomodationName contactId addressId locatedIn locationCalendarId tripTypeName publisherId createdById isActive ownedByAt presentationId atAgency atGuide isPublic lastModified

        }
      }`
      export default `${query}`
     