export const query = `query getAgencybooks($atAgency: Int!) {
        __typename
        books(condition: {atAgency: $atAgency }) {
          nodes {
            id,publishedYear,priceOfAquisition

          }
        }
      }`
      export default `${query}`
     