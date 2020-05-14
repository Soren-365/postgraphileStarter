export const query = `query getAgencytripofferresources($atAgency: Int!) {
        __typename
        tripofferresources(condition: {atAgency: $atAgency }) {
          nodes {
            id,tripOfferName,publisherId,createdById,availableAtCalendarId,guideResponsibleId,guideSecondaryId,atAgency,priceInfoId,destinationId,isSigned,atGuide,isActive,isPublic,lastModified

          }
        }
      }`
      export default `${query}`
     