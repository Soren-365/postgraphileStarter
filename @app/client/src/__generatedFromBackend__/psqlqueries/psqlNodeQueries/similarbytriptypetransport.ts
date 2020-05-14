export const query = `query getNodesimilarbytriptypetransport($nodeId: String!) {
        __typename
        similarbytriptypetransportByNodeId(nodeId: $nodeId }) { 
            transportIds tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
     