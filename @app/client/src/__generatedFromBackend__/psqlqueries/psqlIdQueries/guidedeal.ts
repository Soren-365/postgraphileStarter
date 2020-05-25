export const query = `query Guidedeal($id: Int!) {
        __typename
        guidedeal(id: $id) {
            id

        }
      }`
      export default `${query}`
