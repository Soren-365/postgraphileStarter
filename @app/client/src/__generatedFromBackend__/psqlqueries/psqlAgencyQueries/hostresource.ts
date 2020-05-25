export const query = `query getAgencyhostresources($atAgency: Int!, $id: Int) {
        __typename
        hostresources(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id hostResourceName contactId publisherId createdById withAccomodation atAccomodation atAgency atGuide tripTypeName locatedIn addressInfoId ownedByAt presentationId bookingCalendarId isRomanian isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
     