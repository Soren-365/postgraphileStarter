export const query = `query getNodesimilarbytriptypeevent($nodeId: String!) {
        __typename
        similarbytriptypeeventByNodeId(nodeId: $nodeId }) {
            eventIds tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
     