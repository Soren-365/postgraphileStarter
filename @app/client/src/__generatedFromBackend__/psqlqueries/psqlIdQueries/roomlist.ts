export const query = `query Roomlist($id: Int!) {
        __typename
        roomlist(id: $id) {
            id atAccomodation roomNames roomNumPeople roomCalendarId roomPrices
 
        }
      }`
      export default `${query}`
