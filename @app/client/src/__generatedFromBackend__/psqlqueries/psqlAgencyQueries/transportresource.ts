export const query = `query getAgencytransportresources($atAgency: Int!, $id: Int) {
        __typename
        transportresources(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id transportName contactId publisherId createdById locatedIn addressInfoId atAgency atGuide ownedByAt presentationId isBus numberOfPlaces bookingCalendarId isActive isPublic lastModified

          }
        }
      }`
      export default `${query}`
     