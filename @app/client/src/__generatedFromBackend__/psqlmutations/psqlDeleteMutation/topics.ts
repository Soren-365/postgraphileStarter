export const mutation = `mutation deleteTopics($title: String! , $id: String!) {
        __typename
        deleteTopics(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     