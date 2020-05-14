export const query = `query getConditionalAccount(, $id:  number ) {
        __typename
        accounts(condition: {id: $id ,,, })  {
          nodes {
            id emailHash passwordHash sessionId
 
          }
        }
      }`
      export default `${query}`
        