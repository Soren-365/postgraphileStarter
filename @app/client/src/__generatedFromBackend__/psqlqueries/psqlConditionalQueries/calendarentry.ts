export const query = `query getConditionalCalendarentry(, $id:  number ) {
        __typename
        calendarentries(condition: {id: $id ,,,, })  {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
        