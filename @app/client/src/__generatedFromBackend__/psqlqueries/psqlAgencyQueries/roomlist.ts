export const query = `query getAgencyroomlists($atAgency: Int!, $id: Int) {
        __typename
        roomlists(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id atAccomodation roomNames roomNumPeople roomCalendarId roomPrices

          }
        }
      }`
      export default `${query}`
     