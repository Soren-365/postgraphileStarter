export const query = `query getConditionalSimilarbytriptypeevent(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        similarbytriptypeevents(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            eventIds tripTypeName atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        