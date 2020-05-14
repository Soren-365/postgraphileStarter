export const query = `query getAgencybookingcalendars($atAgency: Int!) {
        __typename
        bookingcalendars(condition: {atAgency: $atAgency }) {
          nodes {
            id,belongsToId,belongsToType,createdById,isActive,fromTimestamp,toTimestamp,resourceType,comment

          }
        }
      }`
      export default `${query}`
     