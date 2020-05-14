export const query = `query getNodecalendarentry($nodeId: String!) {
        __typename
        calendarentryByNodeId(nodeId: $nodeId }) { 
            id fromTimestamp toTimestamp resourceType comment timeCreated

        }
      }`
      export default `${query}`
     