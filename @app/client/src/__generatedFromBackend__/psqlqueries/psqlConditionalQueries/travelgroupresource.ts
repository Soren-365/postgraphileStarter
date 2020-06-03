export const query = `query getConditionalTravelgroupresource(, $undefined:  undefined ) {
        __typename
        travelgroupresources(condition: {undefined: $undefined ,,,,,,,,,,,,,,,,, })  {
          nodes {
            id travelGroupName contactId publisherId createdById numberOfAdults numberOfChildren customInfo bookingCalendarId atAgency atGuide language atTripOfferResource atTouristResource isRomanian isActive lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        