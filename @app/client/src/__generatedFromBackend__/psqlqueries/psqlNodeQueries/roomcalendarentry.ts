export const query = `query getNoderoomcalendarentry($nodeId: String!) {
        __typename
        roomcalendarentryByNodeId(nodeId: $nodeId }) { 
            id atRoomCalendar fromDate toDate comment timeCreated

        }
      }`
      export default `${query}`
     