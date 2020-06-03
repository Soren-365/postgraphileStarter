export const query = `query Roomcalendarentry($id: Int!) {
        __typename
        roomcalendarentry(id: $id) {
            id atRoomCalendar fromDate toDate comment timeCreated

        }
      }`
      export default `${query}`
