export const query = `query Usertabl($id: Int!) {
        __typename
        usertabl(id: $id) {
            id

        }
      }`
      export default `${query}`
