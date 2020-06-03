export const query = `query Timerange($id: Int!) {
        __typename
        timerange(id: $id) {
            id fromTimestamp toTimestamp timeCreated

        }
      }`
      export default `${query}`
