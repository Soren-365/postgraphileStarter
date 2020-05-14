export const query = `query getNodebookingcalendar($nodeId: String!) {
        __typename
        bookingcalendarByNodeId(nodeId: $nodeId }) { 
            id belongsToId belongsToType createdById isActive fromTimestamp toTimestamp resourceType comment

        }
      }`
      export default `${query}`
     