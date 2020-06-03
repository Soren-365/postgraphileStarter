export const mutation = `mutation updateRoomcalendarentry($id: Int ,$atRoomCalendar: Int ,$fromDate: [Date] ,$toDate: [Date] ,$comment: [String] ,$timeCreated: TIMESTAMP DEFAULT NOW , $id: String!) {
        __typename
        updateRoomcalendarentry(input: {id: $id, patch: {,atRoomCalendar: $atRoomCalendar ,fromDate: $fromDate ,toDate: $toDate ,comment: $comment ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     