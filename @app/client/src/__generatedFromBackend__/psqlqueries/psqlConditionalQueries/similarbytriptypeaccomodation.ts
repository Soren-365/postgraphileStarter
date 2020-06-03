export const query = `query getConditionalSimilarbytriptypeaccomodation(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        similarbytriptypeaccomodations(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            accomodationIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        