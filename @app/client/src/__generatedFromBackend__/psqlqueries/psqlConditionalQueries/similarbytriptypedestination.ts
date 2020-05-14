export const query = `query getConditionalSimilarbytriptypedestination(, $timeCreated:  string ) {
        __typename
        similarbytriptypedestinations(condition: {,,,timeCreated: $timeCreated  })  {
          nodes {
            destinationIds tripTypeName atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        