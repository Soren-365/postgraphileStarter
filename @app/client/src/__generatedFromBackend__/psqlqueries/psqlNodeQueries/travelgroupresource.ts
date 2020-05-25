export const query = `query getNodetravelgroupresource($nodeId: String!) {
        __typename
        travelgroupresourceByNodeId(nodeId: $nodeId }) {
            id travelGroupName contactId publisherId createdById numberOfAdults numberOfChildren customInfo bookingCalendarId atAgency atGuide language atTripOfferResource atTouristResource isRomanian isActive lastModified timeCreated

        }
      }`
      export default `${query}`
     