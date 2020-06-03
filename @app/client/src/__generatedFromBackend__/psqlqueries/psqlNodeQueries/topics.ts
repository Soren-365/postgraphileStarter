export const query = `query getNodetopics($nodeId: String!) {
        __typename
        topicsByNodeId(nodeId: $nodeId }) {
            title

        }
      }`
      export default `${query}`
     