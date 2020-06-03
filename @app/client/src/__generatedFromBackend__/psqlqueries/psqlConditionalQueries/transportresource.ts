export const query = `query getConditionalTransportresource(, $undefined:  undefined ) {
        __typename
        transportresources(condition: {undefined: $undefined ,,,,,,,,,,,,,,,,, })  {
          nodes {
            id transportName contactId publisherId createdById locatedIn addressInfoId atAgency atGuide ownedByAt presentationId isBus numberOfPlaces bookingCalendarId isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        