export const query = `query getAgencytouristoffers($atAgency: Int!, $id: Int) {
        __typename
        touristoffers(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id touristResourceIdPool

          }
        }
      }`
      export default `${query}`
     