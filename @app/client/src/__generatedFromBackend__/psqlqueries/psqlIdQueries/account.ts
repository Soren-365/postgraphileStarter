export const query = `query Account($id: Int!) {
        __typename
        account(id: $id) {
            id

        }
      }`
      export default `${query}`
