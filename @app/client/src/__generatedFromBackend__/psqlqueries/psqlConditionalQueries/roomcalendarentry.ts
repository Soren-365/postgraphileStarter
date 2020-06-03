export const query = `query getConditionalRoomcalendarentry(, $undefined:  undefined ) {
        __typename
        roomcalendarentries(condition: {undefined: $undefined ,,,,, })  {
          nodes {
            id atRoomCalendar fromDate toDate comment timeCreated

          }
        }
      }`
      export default `${query}`
        