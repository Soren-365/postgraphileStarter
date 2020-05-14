export const query = `query getAgencyroomcalendars($atAgency: Int!, $id: Int) {
        __typename
        roomcalendars(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id publisherId createdById isActive calendarentryId timeCreated

          }
        }
      }`
      export default `${query}`
     