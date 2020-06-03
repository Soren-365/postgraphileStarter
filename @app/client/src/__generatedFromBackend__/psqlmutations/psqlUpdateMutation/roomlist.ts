export const mutation = `mutation updateRoomlist($id: Int ,$atAccomodation: Int! ,$roomNames: String ,$roomNumPeople: Int ,$roomCalendarId: Int ,$roomPrices: Int ,$roomActive: Boolean , $id: String!) {
        __typename
        updateRoomlist(input: {id: $id, patch: {,atAccomodation: $atAccomodation ,roomNames: $roomNames ,roomNumPeople: $roomNumPeople ,roomCalendarId: $roomCalendarId ,roomPrices: $roomPrices ,roomActive: $roomActive }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     