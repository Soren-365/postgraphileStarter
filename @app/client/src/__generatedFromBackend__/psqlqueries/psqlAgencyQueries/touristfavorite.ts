export const query = `query getAgencytouristfavorites($atAgency: Int!, $id: Int) {
        __typename
        touristfavorites(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     