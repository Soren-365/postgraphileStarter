export const query = `query Guideoffer($id: Int!) {
        __typename
        guideoffer(id: $id) {
            id

        }
      }`
      export default `${query}`
