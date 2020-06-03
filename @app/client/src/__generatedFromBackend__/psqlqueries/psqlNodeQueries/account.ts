export const query = `query getNodeaccount($nodeId: String!) {
        __typename
        accountByNodeId(nodeId: $nodeId }) {
            id emailHash passwordHash sessionId logins

        }
      }`
      export default `${query}`
     