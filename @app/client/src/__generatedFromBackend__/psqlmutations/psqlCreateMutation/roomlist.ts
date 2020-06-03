export const mutation = `mutation createRoomlist(,$atAccomodation: Int! ,$roomNames: String ,$roomNumPeople: Int ,$roomCalendarId: Int ,$roomPrices: Int ,$roomActive: Boolean , $id: String!) {
        __typename
        createRoomlist(input: {id: $id,roomlist: {,atAccomodation: $atAccomodation ,roomNames: $roomNames ,roomNumPeople: $roomNumPeople ,roomCalendarId: $roomCalendarId ,roomPrices: $roomPrices ,roomActive: $roomActive }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     