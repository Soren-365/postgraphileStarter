export const query = `query getAgencyassocaccomodations($atAgency: Int!, $id: Int) {
        __typename
        assocaccomodations(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            assocAccomodationId accomodationId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     