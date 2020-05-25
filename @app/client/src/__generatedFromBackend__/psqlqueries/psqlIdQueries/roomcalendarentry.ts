export const query = `query Roomcalendarentry($id: Int!) {
        __typename
        roomcalendarentry(id: $id) {
            id

        }
      }`
      export default `${query}`
