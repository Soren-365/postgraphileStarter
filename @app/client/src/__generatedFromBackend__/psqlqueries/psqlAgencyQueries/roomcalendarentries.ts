export const query = `query getAgencyroomcalendarentries($atAgency: Int!) {
        __typename
        roomcalendarentries(condition: {atAgency: $atAgency }) {
          nodes {
            id,atRoomCalendar,fromDate,toDate,comment,timeCreated

          }
        }
      }`
      export default `${query}`
     