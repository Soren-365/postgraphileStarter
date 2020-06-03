export const query = `query getConditionalRoomlist(, $undefined:  undefined ) {
        __typename
        roomlists(condition: {undefined: $undefined ,,,,,, })  {
          nodes {
            id atAccomodation roomNames roomNumPeople roomCalendarId roomPrices roomActive

          }
        }
      }`
      export default `${query}`
        