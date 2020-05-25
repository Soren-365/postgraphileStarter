export const query = `query getNodetouristdeal($nodeId: String!) {
        __typename
        touristdealByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     