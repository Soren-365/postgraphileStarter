export const query = `query Tripofferresource($id: Int!) {
        __typename
        tripofferresource(id: $id) {
            id tripOfferName publisherId createdById availableAtCalendarId guideResponsibleId guideSecondaryId atAgency priceInfoId destinationId isSigned atGuide isActive isPublic lastModified timeCreated

        }
      }`
      export default `${query}`
