export const query = `query getConditionalAgencyevent(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        agencyevents(condition: {undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            agencyId eventId timeCreated

          }
        }
      }`
      export default `${query}`
        