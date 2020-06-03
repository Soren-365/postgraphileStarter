export const query = `query getConditionalSimilarbytriptypehost(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        similarbytriptypehosts(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            hostIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        