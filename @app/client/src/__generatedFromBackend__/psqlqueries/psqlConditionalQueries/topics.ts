export const query = `query getConditionalTopics() {
        __typename
        topicss(condition: { })  {
          nodes {
            

          }
        }
      }`
      export default `${query}`
        