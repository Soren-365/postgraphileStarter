export const query = `query Account($id: Int!) {
        __typename
        account(id: $id) {
            id emailHash passwordHash sessionId logins

        }
      }`
      export default `${query}`
