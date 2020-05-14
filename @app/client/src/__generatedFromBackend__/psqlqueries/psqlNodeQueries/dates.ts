export const query = `query getNodedates($nodeId: String!) {
        __typename
        datesByNodeId(nodeId: $nodeId }) {
          nodes {
            useTimeStamp,timeStamp,year,month,day,allDayEvent,hour,minute,timeCreated

          }
        }
      }`
      export default `${query}`
     