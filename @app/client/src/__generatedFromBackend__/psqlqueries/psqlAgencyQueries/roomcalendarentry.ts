export const query = `query getAgencyroomcalendarentries($atAgency: Int!, $id: Int) {
        __typename
        roomcalendarentries(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id atRoomCalendar fromDate toDate comment timeCreated

          }
        }
      }`
      export default `${query}`
     