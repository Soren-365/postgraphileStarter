export const query = `query getAgencytouristbids($atAgency: Int!, $id: Int) {
        __typename
        touristbids(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     