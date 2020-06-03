export const query = `query getNodetimerange($nodeId: String!) {
        __typename
        timerangeByNodeId(nodeId: $nodeId }) {
            id fromTimestamp toTimestamp timeCreated

        }
      }`
      export default `${query}`
     