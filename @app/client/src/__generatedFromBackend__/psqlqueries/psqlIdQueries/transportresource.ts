export const query = `query Transportresource($id: Int!) {
        __typename
        transportresource(id: $id) {
            id transportName contactId publisherId createdById locatedIn addressInfoId atAgency atGuide ownedByAt presentationId isBus numberOfPlaces bookingCalendarId isActive isPublic lastModified timeCreated

        }
      }`
      export default `${query}`
