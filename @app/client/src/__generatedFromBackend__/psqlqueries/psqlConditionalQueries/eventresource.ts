export const query = `query getConditionalEventresource(, $undefined:  undefined ) {
        __typename
        eventresources(condition: {undefined: $undefined ,,,,,,,,,,,,,,,,, })  {
          nodes {
            id eventName agencyName contactId publisherId createdById locatedIn locationAddressId tripTypeName activeAtPeriodsId ownedByAt atAgency atGuide presentationId isActive isPublic lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        