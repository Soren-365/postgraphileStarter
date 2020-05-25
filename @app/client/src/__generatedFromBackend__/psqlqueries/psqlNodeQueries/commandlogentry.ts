export const query = `query getNodecommandlogentry($nodeId: String!) {
        __typename
        commandlogentryByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     