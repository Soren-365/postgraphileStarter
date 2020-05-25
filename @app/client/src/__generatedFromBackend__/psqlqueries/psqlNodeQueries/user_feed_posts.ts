export const query = `query getNodeuser_feed_posts($nodeId: String!) {
        __typename
        user_feed_postsByNodeId(nodeId: $nodeId }) {
            id user_id post_id

        }
      }`
      export default `${query}`
     