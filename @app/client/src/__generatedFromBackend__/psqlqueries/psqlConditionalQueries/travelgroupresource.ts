export const query = `query getConditionalTravelgroupresource(, $id:  number ) {
        __typename
        travelgroupresources(condition: {id: $id ,,,,,,,,,,,,,,,,, })  {
          nodes {
            id travelGroupName contactId publisherId createdById numberOfAdults numberOfChildren customInfo bookingCalendarId atAgency atGuide language atTripOfferResource atTouristResource isRomanian isActive lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        