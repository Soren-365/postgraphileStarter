export const query = `query getAgencytouristdeals($atAgency: Int!, $id: Int) {
        __typename
        touristdeals(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id tripsOfferResourceIdPool guideOfferResourceIdPool agenciesRomanianIdPool agenciesAbroadIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool hostResourceIdPool

          }
        }
      }`
      export default `${query}`
     