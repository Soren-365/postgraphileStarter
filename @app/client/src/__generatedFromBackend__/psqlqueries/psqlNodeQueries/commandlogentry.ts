export const query = `query getNodecommandlogentry($nodeId: String!) {
        __typename
        commandlogentryByNodeId(nodeId: $nodeId }) { 
            id atPublisher belongsToType resourceId logcommand timeCommand

        }
      }`
      export default `${query}`
     