export const query = `query getAgencytouristresources($atAgency: Int!, $id: Int) {
        __typename
        touristresources(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id name contactId publisherId createdById atTravelGroup atAgency atGuide isSigned priceInfoId travellingCalendarId isRomanian isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
     