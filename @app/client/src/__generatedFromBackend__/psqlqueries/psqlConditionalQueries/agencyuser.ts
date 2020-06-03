export const query = `query getConditionalAgencyuser(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        agencyusers(condition: {undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            agencyId userId timeCreated

          }
        }
      }`
      export default `${query}`
        