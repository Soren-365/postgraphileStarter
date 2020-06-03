export const query = `query getConditionalAgencytourist(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        agencytourists(condition: {undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            agencyId touristId timeCreated

          }
        }
      }`
      export default `${query}`
        