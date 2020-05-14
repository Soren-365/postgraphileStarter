export const query = `query getAgencycalendarentries($atAgency: Int!) {
        __typename
        calendarentries(condition: {atAgency: $atAgency }) {
          nodes {
            id,fromTimestamp,toTimestamp,resourceType,comment,timeCreated

          }
        }
      }`
      export default `${query}`
     