export const query = `query Accomodationresource($id: Int!) {
        __typename
        accomodationresource(id: $id) {
            id accomodationName contactId addressId locatedIn locationCalendarId tripTypeName publisherId createdById isActive ownedByAt presentationId atAgency atGuide isPublic lastModified
 
        }
      }`
      export default `${query}`
