export const query = `query getConditionalSimilarbytriptypetransport(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        similarbytriptypetransports(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            transportIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        