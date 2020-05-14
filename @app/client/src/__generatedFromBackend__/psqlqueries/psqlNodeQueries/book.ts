export const query = `query getNodebook($nodeId: String!) {
        __typename
        bookByNodeId(nodeId: $nodeId }) {
          nodes {
            id,publishedYear,priceOfAquisition

          }
        }
      }`
      export default `${query}`
     