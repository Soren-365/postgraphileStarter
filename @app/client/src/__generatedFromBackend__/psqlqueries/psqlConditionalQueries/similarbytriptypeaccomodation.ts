export const query = `query getConditionalSimilarbytriptypeaccomodation(, $tripTypeName:  string , $atAgency:  string , $undefined:  string ) {
        __typename
        similarbytriptypeaccomodations(condition: {,tripTypeName: $tripTypeName ,atAgency: $atAgency ,,undefined: $undefined  })  {
          nodes {
            accomodationIds tripTypeName atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        