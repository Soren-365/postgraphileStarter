export const query = `query Touristdeal($id: Int!) {
        __typename
        touristdeal(id: $id) {
            id

        }
      }`
      export default `${query}`
