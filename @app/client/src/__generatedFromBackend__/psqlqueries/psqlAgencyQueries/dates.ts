export const query = `query getAgencydatess($atAgency: Int!) {
        __typename
        datess(condition: {atAgency: $atAgency }) {
          nodes {
            useTimeStamp,timeStamp,year,month,day,allDayEvent,hour,minute,timeCreated

          }
        }
      }`
      export default `${query}`
     