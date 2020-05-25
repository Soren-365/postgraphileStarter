export const query = `query getNodeaccount($nodeId: String!) {
        __typename
        accountByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     