export const query = `query getConditionalAgencytravelgroup(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        agencytravelgroups(condition: {undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            agencyId travelGroupId timeCreated

          }
        }
      }`
      export default `${query}`
        