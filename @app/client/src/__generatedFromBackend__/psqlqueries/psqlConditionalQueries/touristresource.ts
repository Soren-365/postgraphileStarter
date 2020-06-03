export const query = `query getConditionalTouristresource(, $undefined:  undefined ) {
        __typename
        touristresources(condition: {undefined: $undefined ,,,,,,,,,,,,,,, })  {
          nodes {
            id name contactId publisherId createdById atTravelGroup atAgency atGuide isSigned priceInfoId travellingCalendarId isRomanian isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        