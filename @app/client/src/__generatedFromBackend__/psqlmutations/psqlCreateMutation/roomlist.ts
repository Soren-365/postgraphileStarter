export const mutation = `mutation createRoomlist(,$atAccomodation: Int! ,$roomNames: String ,$roomNumPeople: Int ,$roomCalendarId: Int ,$roomPrices: Int , $clientMutationId: String!) {
        __typename
        createRoomlist(input: {clientMutationId: $clientMutationId,roomlist: {,atAccomodation: $atAccomodation ,roomNames: $roomNames ,roomNumPeople: $roomNumPeople ,roomCalendarId: $roomCalendarId ,roomPrices: $roomPrices }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     