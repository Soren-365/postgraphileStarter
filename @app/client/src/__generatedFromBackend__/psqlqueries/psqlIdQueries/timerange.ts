export const query = `query Timerange($id: Int!) {
        __typename
        timerange(id: $id) {
            id

        }
      }`
      export default `${query}`
