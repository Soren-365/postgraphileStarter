export const query = `query getAgencyroomlists($atAgency: Int!) {
        __typename
        roomlists(condition: {atAgency: $atAgency }) {
          nodes {
            id,atAccomodation,roomNames,roomNumPeople,roomCalendarId,roomPrices

          }
        }
      }`
      export default `${query}`
     