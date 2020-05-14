export const query = `query getAgencyhostresources($atAgency: Int!) {
        __typename
        hostresources(condition: {atAgency: $atAgency }) {
          nodes {
            id,hostResourceName,contactId,publisherId,createdById,withAccomodation,atAccomodation,atAgency,atGuide,tripTypeName,locatedIn,addressInfoId,ownedByAt,presentationId,bookingCalendarId,isRomanian,isActive,isPublic,lastModified

          }
        }
      }`
      export default `${query}`
     