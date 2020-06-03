export const query = `query getAgencyaccounts($atAgency: Int!, $id: Int) {
        __typename
        accounts(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id emailHash passwordHash sessionId logins

          }
        }
      }`
      export default `${query}`
     