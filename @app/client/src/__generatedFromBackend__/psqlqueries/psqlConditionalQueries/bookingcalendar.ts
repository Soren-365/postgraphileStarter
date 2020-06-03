export const query = `query getConditionalBookingcalendar(, $undefined:  undefined ) {
        __typename
        bookingcalendars(condition: {undefined: $undefined ,,,,,,,,, })  {
          nodes {
            id belongsToId belongsToType createdById isActive fromTimestamp toTimestamp resourceType comment timeCreated

          }
        }
      }`
      export default `${query}`
        