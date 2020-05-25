export const mutation = `mutation createRoomlist(,$atAccomodation: Int! ,$roomNames: String ,$roomNumPeople: Int ,$roomCalendarId: Int ,$roomPrices: Int ,$roomActive: Boolean , $clientMutationId: String!) {
        __typename
        createRoomlist(input: {clientMutationId: $clientMutationId,roomlist: {,atAccomodation: $atAccomodation ,roomNames: $roomNames ,roomNumPeople: $roomNumPeople ,roomCalendarId: $roomCalendarId ,roomPrices: $roomPrices ,roomActive: $roomActive }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     