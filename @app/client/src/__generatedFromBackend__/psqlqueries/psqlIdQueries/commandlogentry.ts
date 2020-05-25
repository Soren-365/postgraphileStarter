export const query = `query Commandlogentry($id: Int!) {
        __typename
        commandlogentry(id: $id) {
            id

        }
      }`
      export default `${query}`
