export const query = `query getNodedate_($nodeId: String!) {
        __typename
        date_ByNodeId(nodeId: $nodeId }) {
            useTimeStamp timeStamp year month day allDayEvent hour minute timeCreated

        }
      }`
      export default `${query}`
     