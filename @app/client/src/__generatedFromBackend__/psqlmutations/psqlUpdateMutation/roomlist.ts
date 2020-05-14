export const mutation = `mutation updateRoomlist($id: Int ,$atAccomodation: Int! ,$roomNames: String ,$roomNumPeople: Int ,$roomCalendarId: Int ,$roomPrices: Int , $clientMutationId: String!) {
        __typename
        updateRoomlist(input: {clientMutationId: $clientMutationId, patch: {,atAccomodation: $atAccomodation ,roomNames: $roomNames ,roomNumPeople: $roomNumPeople ,roomCalendarId: $roomCalendarId ,roomPrices: $roomPrices }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     