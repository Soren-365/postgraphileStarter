export const query = `query Touristoffer($id: Int!) {
        __typename
        touristoffer(id: $id) {
            id

        }
      }`
      export default `${query}`
