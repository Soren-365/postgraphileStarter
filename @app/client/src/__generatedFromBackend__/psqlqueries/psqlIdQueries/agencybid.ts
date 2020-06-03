export const query = `query Agencybid($id: Int!) {
        __typename
        agencybid(id: $id) {
            id agencyId touristResourceIdPool

        }
      }`
      export default `${query}`
