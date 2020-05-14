export const query = `query getConditionalSimilarbytriptypehost(, $tripTypeName:  string , $timeCreated:  string ) {
        __typename
        similarbytriptypehosts(condition: {,tripTypeName: $tripTypeName ,,timeCreated: $timeCreated  })  {
          nodes {
            hostIds tripTypeName atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        