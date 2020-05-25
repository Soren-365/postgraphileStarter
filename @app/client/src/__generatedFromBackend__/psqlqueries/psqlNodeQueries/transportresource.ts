export const query = `query getNodetransportresource($nodeId: String!) {
        __typename
        transportresourceByNodeId(nodeId: $nodeId }) {
            id transportName contactId publisherId createdById locatedIn addressInfoId atAgency atGuide ownedByAt presentationId isBus numberOfPlaces bookingCalendarId isActive isPublic lastModified timeCreated

        }
      }`
      export default `${query}`
     