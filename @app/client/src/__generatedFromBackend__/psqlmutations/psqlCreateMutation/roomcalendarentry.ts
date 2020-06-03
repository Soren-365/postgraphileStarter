export const mutation = `mutation createRoomcalendarentry(,$atRoomCalendar: Int ,$fromDate: [Date] ,$toDate: [Date] ,$comment: [String] ,$timeCreated: TIMESTAMP DEFAULT NOW , $id: String!) {
        __typename
        createRoomcalendarentry(input: {id: $id,roomcalendarentry: {,atRoomCalendar: $atRoomCalendar ,fromDate: $fromDate ,toDate: $toDate ,comment: $comment ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     