export const query = `query getAgencyaccomodationresources($atAgency: Int!) {
        __typename
        accomodationresources(condition: {atAgency: $atAgency }) {
          nodes {
            id,accomodationName,contactId,addressId,locatedIn,locationCalendarId,tripTypeName,publisherId,createdById,isActive,ownedByAt,presentationId,atAgency,atGuide,isPublic,lastModified

          }
        }
      }`
      export default `${query}`
     