export const query = `query Travelgroupresource($id: Int!) {
        __typename
        travelgroupresource(id: $id) {
            id travelGroupName contactId publisherId createdById numberOfAdults numberOfChildren customInfo bookingCalendarId atAgency atGuide language atTripOfferResource atTouristResource isRomanian isActive lastModified
 
        }
      }`
      export default `${query}`
