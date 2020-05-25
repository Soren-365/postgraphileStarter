export const query = `query Agencydeal($id: Int!) {
        __typename
        agencydeal(id: $id) {
            id

        }
      }`
      export default `${query}`
