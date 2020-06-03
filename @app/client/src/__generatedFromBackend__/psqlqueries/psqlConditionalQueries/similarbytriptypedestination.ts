export const query = `query getConditionalSimilarbytriptypedestination(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        similarbytriptypedestinations(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            destinationIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        