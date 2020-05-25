export const query = `query getNodetouristbid($nodeId: String!) {
        __typename
        touristbidByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     