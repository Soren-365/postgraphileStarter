export const query = `query getAgencytripofferresources($atAgency: Int!, $id: Int) {
        __typename
        tripofferresources(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id tripOfferName publisherId createdById availableAtCalendarId guideResponsibleId guideSecondaryId atAgency priceInfoId destinationId isSigned atGuide isActive isPublic lastModified

          }
        }
      }`
      export default `${query}`
     