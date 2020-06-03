export const query = `query getConditionalAgencyhost(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        agencyhosts(condition: {undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            agencyId hostId timeCreated

          }
        }
      }`
      export default `${query}`
        