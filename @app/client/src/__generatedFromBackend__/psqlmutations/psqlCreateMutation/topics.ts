export const mutation = `mutation createTopics($title: String! , $id: String!) {
        __typename
        createTopics(input: {id: $id,topics: {title: $title }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     