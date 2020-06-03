export const query = `query getConditionalAccount(, $undefined:  undefined ) {
        __typename
        accounts(condition: {undefined: $undefined ,,,, })  {
          nodes {
            id emailHash passwordHash sessionId logins

          }
        }
      }`
      export default `${query}`
        