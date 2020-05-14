export const query = `query getNodebid($nodeId: String!) {
        __typename
        bidByNodeId(nodeId: $nodeId }) { 
            id publisherId createdById bidAmount isActive timeCreated

        }
      }`
      export default `${query}`
     