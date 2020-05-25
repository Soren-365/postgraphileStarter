export const query = `query getNodebid($nodeId: String!) {
        __typename
        bidByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     