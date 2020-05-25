export const query = `query Calendarentry($id: Int!) {
        __typename
        calendarentry(id: $id) {
            id

        }
      }`
      export default `${query}`
