export const query = `query Touristfavorite($id: Int!) {
        __typename
        touristfavorite(id: $id) {
            id

        }
      }`
      export default `${query}`
