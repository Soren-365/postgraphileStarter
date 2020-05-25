export const query = `query Agencybid($id: Int!) {
        __typename
        agencybid(id: $id) {
            id agencyId

        }
      }`
      export default `${query}`
