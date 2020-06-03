export const query = `query getConditionalAgencyfavorite(, $undefined:  undefined , $undefined:  undefined , $undefined:  undefined ) {
        __typename
        agencyfavorites(condition: {undefined: $undefined ,undefined: $undefined ,undefined: $undefined  })  {
          nodes {
            resourceId resourceType atAgency

          }
        }
      }`
      export default `${query}`
        