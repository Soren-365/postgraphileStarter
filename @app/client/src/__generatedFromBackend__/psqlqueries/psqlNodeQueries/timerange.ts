export const query = `query getNodetimerange($nodeId: String!) {
        __typename
        timerangeByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     