export const mutation = `mutation createRoomcalendarentry(,$atRoomCalendar: Int ,$fromDate: [Date] ,$toDate: [Date] ,$comment: [String] ,$timeCreated: TIMESTAMP DEFAULT NOW( , $clientMutationId: String!) {
        __typename
        createRoomcalendarentry(input: {clientMutationId: $clientMutationId,roomcalendarentry: {,atRoomCalendar: $atRoomCalendar ,fromDate: $fromDate ,toDate: $toDate ,comment: $comment ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     