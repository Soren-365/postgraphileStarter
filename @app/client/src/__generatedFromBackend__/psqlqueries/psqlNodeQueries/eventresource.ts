export const query = `query getNodeeventresource($nodeId: String!) {
        __typename
        eventresourceByNodeId(nodeId: $nodeId }) {
            id eventName agencyName contactId publisherId createdById locatedIn locationAddressId tripTypeName activeAtPeriodsId ownedByAt atAgency atGuide presentationId isActive isPublic lastModified timeCreated

        }
      }`
      export default `${query}`
     