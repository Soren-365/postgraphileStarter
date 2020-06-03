export const query = `query getConditionalSimilarbytriptypeguide(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        similarbytriptypeguides(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            guideIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        