export const query = `query getAgencytouristoffers($atAgency: Int!) {
        __typename
        touristoffers(condition: {atAgency: $atAgency }) {
          nodes {
            id

          }
        }
      }`
      export default `${query}`
     