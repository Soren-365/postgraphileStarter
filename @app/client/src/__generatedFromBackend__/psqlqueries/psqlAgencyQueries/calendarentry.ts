export const query = `query getAgencycalendarentries($atAgency: Int!, $id: Int) {
        __typename
        calendarentries(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     