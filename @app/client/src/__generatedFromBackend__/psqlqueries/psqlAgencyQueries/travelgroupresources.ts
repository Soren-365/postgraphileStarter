export const query = `query getAgencytravelgroupresources($atAgency: Int!) {
        __typename
        travelgroupresources(condition: {atAgency: $atAgency }) {
          nodes {
            id,travelGroupName,contactId,publisherId,createdById,numberOfAdults,numberOfChildren,customInfo,bookingCalendarId,atAgency,atGuide,language,atTripOfferResource,atTouristResource,isRomanian,isActive,lastModified

          }
        }
      }`
      export default `${query}`
     