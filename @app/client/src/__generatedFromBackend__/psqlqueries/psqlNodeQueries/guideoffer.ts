export const query = `query getNodeguideoffer($nodeId: String!) {
        __typename
        guideofferByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     