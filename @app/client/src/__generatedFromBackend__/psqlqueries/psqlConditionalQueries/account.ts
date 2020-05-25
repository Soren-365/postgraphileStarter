export const query = `query getConditionalAccount(, $id:  number ) {
        __typename
        accounts(condition: {id: $id ,,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        