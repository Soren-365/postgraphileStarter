export const query = `query getConditionalAccomodationresource(, $undefined:  undefined ) {
        __typename
        accomodationresources(condition: {undefined: $undefined ,,,,,,,,,,,,,,,, })  {
          nodes {
            id accomodationName contactId addressId locatedIn locationCalendarId tripTypeName publisherId createdById isActive ownedByAt presentationId atAgency atGuide isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        