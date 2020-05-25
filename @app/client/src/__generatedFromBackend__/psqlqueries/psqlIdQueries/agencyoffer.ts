export const query = `query Agencyoffer($id: Int!) {
        __typename
        agencyoffer(id: $id) {
            id

        }
      }`
      export default `${query}`
