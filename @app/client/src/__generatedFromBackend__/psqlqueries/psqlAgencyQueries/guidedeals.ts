export const query = `query getAgencyguidedeals($atAgency: Int!) {
        __typename
        guidedeals(condition: {atAgency: $atAgency }) {
          nodes {
            id,tripsOfferResourceIdPool,agenciesRomanianIdPool,agenciesAbroadIdPool

          }
        }
      }`
      export default `${query}`
     