export const query = `query getConditionalHostresource(, $undefined:  undefined ) {
        __typename
        hostresources(condition: {undefined: $undefined ,,,,,,,,,,,,,,,,,,, })  {
          nodes {
            id hostResourceName contactId publisherId createdById withAccomodation atAccomodation atAgency atGuide tripTypeName locatedIn addressInfoId ownedByAt presentationId bookingCalendarId isRomanian isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        