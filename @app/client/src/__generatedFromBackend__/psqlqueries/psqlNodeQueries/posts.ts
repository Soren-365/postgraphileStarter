export const query = `query getNodeposts($nodeId: String!) {
        __typename
        postsByNodeId(nodeId: $nodeId }) {
            id author_id headline body topic created_at

        }
      }`
      export default `${query}`
     