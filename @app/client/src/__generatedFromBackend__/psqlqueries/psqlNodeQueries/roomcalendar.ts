export const query = `query getNoderoomcalendar($nodeId: String!) {
        __typename
        roomcalendarByNodeId(nodeId: $nodeId }) {
            id publisherId createdById isActive calendarentryId timeCreated

        }
      }`
      export default `${query}`
     