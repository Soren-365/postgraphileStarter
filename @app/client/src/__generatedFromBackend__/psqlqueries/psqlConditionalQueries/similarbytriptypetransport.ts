export const query = `query getConditionalSimilarbytriptypetransport(, $timeCreated:  string ) {
        __typename
        similarbytriptypetransports(condition: {,,,timeCreated: $timeCreated  })  {
          nodes {
            transportIds tripTypeName atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        