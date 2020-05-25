export const query = `query getNodetripofferresource($nodeId: String!) {
        __typename
        tripofferresourceByNodeId(nodeId: $nodeId }) {
            id tripOfferName publisherId createdById availableAtCalendarId guideResponsibleId guideSecondaryId atAgency priceInfoId destinationId isSigned atGuide isActive isPublic lastModified timeCreated

        }
      }`
      export default `${query}`
     