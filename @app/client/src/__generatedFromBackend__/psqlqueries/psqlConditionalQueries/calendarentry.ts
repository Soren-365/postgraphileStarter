export const query = `query getConditionalCalendarentry(, $id:  number ) {
        __typename
        calendarentries(condition: {id: $id ,,,,, })  {
          nodes {
            id fromTimestamp toTimestamp resourceType comment timeCreated
 
          }
        }
      }`
      export default `${query}`
        