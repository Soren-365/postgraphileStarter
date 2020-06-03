export const query = `query getConditionalTripofferresource(, $undefined:  undefined ) {
        __typename
        tripofferresources(condition: {undefined: $undefined ,,,,,,,,,,,,,,, })  {
          nodes {
            id tripOfferName publisherId createdById availableAtCalendarId guideResponsibleId guideSecondaryId atAgency priceInfoId destinationId isSigned atGuide isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        