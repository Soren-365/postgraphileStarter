export const query = `query getConditionalDate_() {
        __typename
        date_s(condition: {,,,,,,, })  {
          nodes {
            useTimeStamp

          }
        }
      }`
      export default `${query}`
        