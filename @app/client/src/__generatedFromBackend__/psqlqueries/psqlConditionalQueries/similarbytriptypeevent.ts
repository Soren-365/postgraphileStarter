export const query = `query getConditionalSimilarbytriptypeevent(, $timeCreated:  string ) {
        __typename
        similarbytriptypeevents(condition: {,,,timeCreated: $timeCreated  })  {
          nodes {
            eventIds tripTypeName atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        