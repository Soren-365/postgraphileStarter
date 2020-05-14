export const query = `query getAgencyassocaccomodations($atAgency: Int!) {
        __typename
        assocaccomodations(condition: {atAgency: $atAgency }) {
          nodes {
            assocAccomodationId,accomodationId,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     