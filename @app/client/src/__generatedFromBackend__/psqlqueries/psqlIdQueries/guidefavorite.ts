export const query = `query Guidefavorite($id: Int!) {
        __typename
        guidefavorite(id: $id) {
            id

        }
      }`
      export default `${query}`
