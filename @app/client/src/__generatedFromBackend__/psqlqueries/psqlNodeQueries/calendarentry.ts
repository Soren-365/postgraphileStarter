export const query = `query getNodecalendarentry($nodeId: String!) {
        __typename
        calendarentryByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     