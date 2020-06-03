export const query = `query getNodesimilarbytriptypedestination($nodeId: String!) {
        __typename
        similarbytriptypedestinationByNodeId(nodeId: $nodeId }) {
            destinationIds tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
     