export const query = `query getConditionalSimilarbytriptypeaccomodation(, $tripTypeName:  string , $timeCreated:  string ) {
        __typename
        similarbytriptypeaccomodations(condition: {,,,tripTypeName: $tripTypeName ,,timeCreated: $timeCreated  })  {
          nodes {
            accomodationIds -- triptypes tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        