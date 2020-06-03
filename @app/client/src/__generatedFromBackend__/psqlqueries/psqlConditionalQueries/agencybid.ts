export const query = `query getConditionalAgencybid(, $undefined:  undefined ) {
        __typename
        agencybids(condition: {undefined: $undefined ,, })  {
          nodes {
            id agencyId touristResourceIdPool

          }
        }
      }`
      export default `${query}`
        