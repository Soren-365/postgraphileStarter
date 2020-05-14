export const query = `query getAgencyaccounts($atAgency: Int!) {
        __typename
        accounts(condition: {atAgency: $atAgency }) {
          nodes {
            id,emailHash,passwordHash,sessionId

          }
        }
      }`
      export default `${query}`
     