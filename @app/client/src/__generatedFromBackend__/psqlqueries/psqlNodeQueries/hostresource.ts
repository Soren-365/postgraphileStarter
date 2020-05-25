export const query = `query getNodehostresource($nodeId: String!) {
        __typename
        hostresourceByNodeId(nodeId: $nodeId }) {
            id hostResourceName contactId publisherId createdById withAccomodation atAccomodation atAgency atGuide tripTypeName locatedIn addressInfoId ownedByAt presentationId bookingCalendarId isRomanian isActive isPublic lastModified timeCreated

        }
      }`
      export default `${query}`
     