export const query = `query getConditionalTimerange(, $undefined:  undefined ) {
        __typename
        timeranges(condition: {undefined: $undefined ,,, })  {
          nodes {
            id fromTimestamp toTimestamp timeCreated

          }
        }
      }`
      export default `${query}`
        