export const query = `query getAgencytransportresources($atAgency: Int!) {
        __typename
        transportresources(condition: {atAgency: $atAgency }) {
          nodes {
            id,transportName,contactId,publisherId,createdById,locatedIn,addressInfoId,atAgency,atGuide,ownedByAt,presentationId,isBus,numberOfPlaces,bookingCalendarId,isActive,isPublic,lastModified

          }
        }
      }`
      export default `${query}`
     