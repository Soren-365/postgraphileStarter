export const query = `query Bid($id: Int!) {
        __typename
        bid(id: $id) {
            id

        }
      }`
      export default `${query}`
