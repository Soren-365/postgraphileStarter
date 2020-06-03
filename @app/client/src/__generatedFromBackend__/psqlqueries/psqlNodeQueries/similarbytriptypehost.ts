export const query = `query getNodesimilarbytriptypehost($nodeId: String!) {
        __typename
        similarbytriptypehostByNodeId(nodeId: $nodeId }) {
            hostIds tripTypeName atAgency timeCreated

        }
      }`
      export default `${query}`
     