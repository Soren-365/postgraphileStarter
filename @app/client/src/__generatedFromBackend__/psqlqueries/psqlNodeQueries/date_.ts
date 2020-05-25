export const query = `query getNodedate_($nodeId: String!) {
        __typename
        date_ByNodeId(nodeId: $nodeId }) {
            useTimeStamp

        }
      }`
      export default `${query}`
     