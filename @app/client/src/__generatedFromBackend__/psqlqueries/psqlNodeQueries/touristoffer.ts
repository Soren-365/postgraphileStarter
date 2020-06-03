export const query = `query getNodetouristoffer($nodeId: String!) {
        __typename
        touristofferByNodeId(nodeId: $nodeId }) {
            id touristResourceIdPool

        }
      }`
      export default `${query}`
     