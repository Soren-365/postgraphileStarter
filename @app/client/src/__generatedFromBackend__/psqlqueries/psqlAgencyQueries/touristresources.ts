export const query = `query getAgencytouristresources($atAgency: Int!) {
        __typename
        touristresources(condition: {atAgency: $atAgency }) {
          nodes {
            id,name,contactId,publisherId,createdById,atTravelGroup,atAgency,atGuide,isSigned,priceInfoId,travellingCalendarId,isRomanian,isActive,isPublic,lastModified

          }
        }
      }`
      export default `${query}`
     