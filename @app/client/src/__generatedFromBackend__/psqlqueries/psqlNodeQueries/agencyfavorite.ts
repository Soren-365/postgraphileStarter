export const query = `query getNodeagencyfavorite($nodeId: String!) {
        __typename
        agencyfavoriteByNodeId(nodeId: $nodeId }) { 
            resourceId resourceType atAgency

        }
      }`
      export default `${query}`
     