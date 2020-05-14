export const query = `query Hostresource($id: Int!) {
        __typename
        hostresource(id: $id) {
            id hostResourceName contactId publisherId createdById withAccomodation atAccomodation atAgency atGuide tripTypeName locatedIn addressInfoId ownedByAt presentationId bookingCalendarId isRomanian isActive isPublic lastModified
 
        }
      }`
      export default `${query}`
