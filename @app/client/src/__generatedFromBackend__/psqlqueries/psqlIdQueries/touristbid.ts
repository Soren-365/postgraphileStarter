export const query = `query Touristbid($id: Int!) {
        __typename
        touristbid(id: $id) {
            id

        }
      }`
      export default `${query}`
