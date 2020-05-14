export const query = `query getAgencyroomcalendars($atAgency: Int!) {
        __typename
        roomcalendars(condition: {atAgency: $atAgency }) {
          nodes {
            id,publisherId,createdById,isActive,calendarentryId,timeCreated

          }
        }
      }`
      export default `${query}`
     