export const query = `query getConditionalDate_() {
        __typename
        date_s(condition: {,,,,,,,, })  {
          nodes {
            useTimeStamp timeStamp year month day allDayEvent hour minute timeCreated
 
          }
        }
      }`
      export default `${query}`
        