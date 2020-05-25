export const query = `query getNodeguidedeal($nodeId: String!) {
        __typename
        guidedealByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     