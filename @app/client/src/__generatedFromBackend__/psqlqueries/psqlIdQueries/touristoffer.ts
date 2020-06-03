export const query = `query Touristoffer($id: Int!) {
        __typename
        touristoffer(id: $id) {
            id touristResourceIdPool

        }
      }`
      export default `${query}`
