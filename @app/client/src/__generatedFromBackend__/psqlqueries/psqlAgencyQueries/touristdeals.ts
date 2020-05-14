export const query = `query getAgencytouristdeals($atAgency: Int!) {
        __typename
        touristdeals(condition: {atAgency: $atAgency }) {
          nodes {
            id,tripsOfferResourceIdPool,guideOfferResourceIdPool,agenciesRomanianIdPool,agenciesAbroadIdPool,eventResourceIdPool,transportationResourceIdPool,accomodationResourceIdPool

          }
        }
      }`
      export default `${query}`
     