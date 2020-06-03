export const query = `query getConditionalAgencytransport(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        agencytransports(condition: {undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            agencyId transportId timeCreated

          }
        }
      }`
      export default `${query}`
        