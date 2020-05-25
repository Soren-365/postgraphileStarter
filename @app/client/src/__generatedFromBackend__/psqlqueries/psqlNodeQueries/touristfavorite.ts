export const query = `query getNodetouristfavorite($nodeId: String!) {
        __typename
        touristfavoriteByNodeId(nodeId: $nodeId }) {
            id

        }
      }`
      export default `${query}`
     