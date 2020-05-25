export const query = `query getConditionalAgencydeal(, $id:  number ) {
        __typename
        agencydeals(condition: {id: $id ,,,,,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        