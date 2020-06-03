export const query = `query getConditionalPresentation(, $undefined:  undefined ) {
        __typename
        presentations(condition: {undefined: $undefined ,,,,,,,, })  {
          nodes {
            id headline publisherId createdById resourceType resourceTypeId isActive lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        