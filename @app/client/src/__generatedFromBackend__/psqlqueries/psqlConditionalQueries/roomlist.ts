export const query = `query getConditionalRoomlist(, $id:  number , $atAccomodation:  number , $roomCalendarId:  number ) {
        __typename
        roomlists(condition: {id: $id ,atAccomodation: $atAccomodation ,,,roomCalendarId: $roomCalendarId ,, })  {
          nodes {
            id atAccomodation roomNames roomNumPeople roomCalendarId roomPrices
 
          }
        }
      }`
      export default `${query}`
        