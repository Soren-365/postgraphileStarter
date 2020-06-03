export const query = `query getConditionalRoomcalendar(, $undefined:  undefined ) {
        __typename
        roomcalendars(condition: {undefined: $undefined ,,,,, })  {
          nodes {
            id publisherId createdById isActive calendarentryId timeCreated

          }
        }
      }`
      export default `${query}`
        