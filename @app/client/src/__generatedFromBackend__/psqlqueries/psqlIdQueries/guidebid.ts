export const query = `query Guidebid($id: Int!) {
        __typename
        guidebid(id: $id) {
            id

        }
      }`
      export default `${query}`
