export const query = `query getAgencybookingcalendars($atAgency: Int!, $id: Int) {
        __typename
        bookingcalendars(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id belongsToId belongsToType createdById isActive fromTimestamp toTimestamp resourceType comment

          }
        }
      }`
      export default `${query}`
     