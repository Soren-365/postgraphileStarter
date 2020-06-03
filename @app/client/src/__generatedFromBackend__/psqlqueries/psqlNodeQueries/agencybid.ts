export const query = `query getNodeagencybid($nodeId: String!) {
        __typename
        agencybidByNodeId(nodeId: $nodeId }) {
            id agencyId touristResourceIdPool

        }
      }`
      export default `${query}`
     