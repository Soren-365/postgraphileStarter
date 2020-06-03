export const query = `query getConditionalSimilarbytriptypetravelgroup(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        similarbytriptypetravelgroups(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            travelGroupIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        