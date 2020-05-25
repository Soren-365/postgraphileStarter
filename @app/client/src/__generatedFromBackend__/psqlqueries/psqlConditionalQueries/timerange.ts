export const query = `query getConditionalTimerange(, $id:  number ) {
        __typename
        timeranges(condition: {id: $id ,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        