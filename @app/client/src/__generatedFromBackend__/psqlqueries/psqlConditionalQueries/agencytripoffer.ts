export const query = `query getConditionalAgencytripoffer(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        agencytripoffers(condition: {undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            agencyId tripOfferId timeCreated

          }
        }
      }`
      export default `${query}`
        