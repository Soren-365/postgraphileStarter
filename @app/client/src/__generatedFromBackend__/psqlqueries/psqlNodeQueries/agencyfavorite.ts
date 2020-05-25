export const query = `query getNodeagencyfavorite($nodeId: String!) {
        __typename
        agencyfavoriteByNodeId(nodeId: $nodeId }) {
            resourceId

        }
      }`
      export default `${query}`
     