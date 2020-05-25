export const query = `query Topics($undefined: Int!) {
        __typename
        topics(id: $undefined) {
            

        }
      }`
      export default `${query}`
