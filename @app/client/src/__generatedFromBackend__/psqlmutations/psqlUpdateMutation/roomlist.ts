export const mutation = `mutation updateRoomlist($id: Int ,$atAccomodation: Int! ,$roomNames: String ,$roomNumPeople: Int ,$roomCalendarId: Int ,$roomPrices: Int ,$roomActive: Boolean , $clientMutationId: String!) {
        __typename
        updateRoomlist(input: {clientMutationId: $clientMutationId, patch: {,atAccomodation: $atAccomodation ,roomNames: $roomNames ,roomNumPeople: $roomNumPeople ,roomCalendarId: $roomCalendarId ,roomPrices: $roomPrices ,roomActive: $roomActive }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     