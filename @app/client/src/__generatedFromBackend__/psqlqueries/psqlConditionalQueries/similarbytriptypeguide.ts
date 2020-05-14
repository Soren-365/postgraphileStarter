export const query = `query getConditionalSimilarbytriptypeguide(, $timeCreated:  string ) {
        __typename
        similarbytriptypeguides(condition: {,,,timeCreated: $timeCreated  })  {
          nodes {
            guideIds tripTypeName atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        