export const query = `query getNodesimilarbytriptypeguide($nodeId: String!) {
        __typename
        similarbytriptypeguideByNodeId(nodeId: $nodeId }) { 
            guideIds tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
     