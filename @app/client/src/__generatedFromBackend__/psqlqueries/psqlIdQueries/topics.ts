export const query = `query Topics($title: Int!) {
        __typename
        topics(id: $title) {
            title

        }
      }`
      export default `${query}`
