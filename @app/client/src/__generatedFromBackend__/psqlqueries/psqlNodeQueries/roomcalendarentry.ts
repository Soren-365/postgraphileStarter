export const query = `query getNoderoomcalendarentry($nodeId: String!) {
        __typename
        roomcalendarentryByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     