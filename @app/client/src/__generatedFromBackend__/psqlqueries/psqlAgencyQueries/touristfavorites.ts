export const query = `query getAgencytouristfavorites($atAgency: Int!) {
        __typename
        touristfavorites(condition: {atAgency: $atAgency }) {
          nodes {
            id,agenciesRomanianIdPool,agenciesAbroadIdPool,travelGroupResourceIdPool,tripsOfferResourceIdPool,guideResourceIdPool,eventResourceIdPool,transportationResourceIdPool,accomodationResourceIdPool

          }
        }
      }`
      export default `${query}`
     