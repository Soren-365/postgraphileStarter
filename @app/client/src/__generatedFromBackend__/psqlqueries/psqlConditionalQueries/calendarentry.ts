export const query = `query getConditionalCalendarentry(, $undefined:  undefined ) {
        __typename
        calendarentries(condition: {undefined: $undefined ,,,,, })  {
          nodes {
            id fromTimestamp toTimestamp resourceType comment timeCreated

          }
        }
      }`
      export default `${query}`
        