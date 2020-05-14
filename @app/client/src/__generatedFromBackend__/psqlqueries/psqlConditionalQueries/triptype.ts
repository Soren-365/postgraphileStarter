export const query = `query getConditionalTriptype(, $timeCreated:  string ) {
        __typename
        triptypes(condition: {,,,,timeCreated: $timeCreated  })  {
          nodes {
            id tripTypeName atAgency lastModified timeCreated
 
          }
        }
      }`
      export default `${query}`
        