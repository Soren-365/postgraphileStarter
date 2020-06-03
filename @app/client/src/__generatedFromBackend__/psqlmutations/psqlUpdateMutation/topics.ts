export const mutation = `mutation updateTopics($title: String! , $id: String!) {
        __typename
        updateTopics(input: {id: $id, patch: {title: $title }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     