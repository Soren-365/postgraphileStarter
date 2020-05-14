export const query = `query getConditionalSimilarbytriptypetravelgroup(, $timeCreated:  string ) {
        __typename
        similarbytriptypetravelgroups(condition: {,,,timeCreated: $timeCreated  })  {
          nodes {
            travelGroupIds tripTypeName atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        