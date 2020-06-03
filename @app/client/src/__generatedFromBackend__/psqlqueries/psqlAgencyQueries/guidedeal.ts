export const query = `query getAgencyguidedeals($atAgency: Int!, $id: Int) {
        __typename
        guidedeals(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id tripsOfferResourceIdPool agenciesRomanianIdPool agenciesAbroadIdPool touristResourceIdPool

          }
        }
      }`
      export default `${query}`
     