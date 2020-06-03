export const query = `query getConditionalAgencyguide(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        agencyguides(condition: {undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            agencyId guideId timeCreated

          }
        }
      }`
      export default `${query}`
        