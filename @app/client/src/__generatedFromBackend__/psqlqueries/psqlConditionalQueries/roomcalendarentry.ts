export const query = `query getConditionalRoomcalendarentry(, $id:  number , $atRoomCalendar:  number ) {
        __typename
        roomcalendarentries(condition: {id: $id ,atRoomCalendar: $atRoomCalendar ,,,, })  {
          nodes {
            id atRoomCalendar fromDate toDate comment timeCreated
 
          }
        }
      }`
      export default `${query}`
        