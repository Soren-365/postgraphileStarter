export const query = `query getConditionalTopics(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        topicss(condition: {undefined: $undefined ,undefined: $undefined  })  {
          nodes {
            title

          }
        }
      }`
      export default `${query}`
        