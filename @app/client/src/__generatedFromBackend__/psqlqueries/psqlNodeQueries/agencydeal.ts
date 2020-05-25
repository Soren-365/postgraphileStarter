export const query = `query getNodeagencydeal($nodeId: String!) {
        __typename
        agencydealByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     