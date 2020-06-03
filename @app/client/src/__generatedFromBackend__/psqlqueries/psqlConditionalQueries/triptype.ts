export const query = `query getConditionalTriptype(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        triptypes(condition: {,undefined: $undefined ,undefined: $undefined ,, })  {
          nodes {
            id tripTypeName atAgency lastModified timeCreated

          }
        }
      }`
      export default `${query}`
        