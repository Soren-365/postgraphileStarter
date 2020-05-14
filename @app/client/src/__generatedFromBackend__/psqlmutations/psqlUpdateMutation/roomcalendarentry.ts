export const mutation = `mutation updateRoomcalendarentry($id: Int ,$atRoomCalendar: Int ,$fromDate: [Date] ,$toDate: [Date] ,$comment: [String] ,$timeCreated: TIMESTAMP DEFAULT NOW( , $clientMutationId: String!) {
        __typename
        updateRoomcalendarentry(input: {clientMutationId: $clientMutationId, patch: {,atRoomCalendar: $atRoomCalendar ,fromDate: $fromDate ,toDate: $toDate ,comment: $comment ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     