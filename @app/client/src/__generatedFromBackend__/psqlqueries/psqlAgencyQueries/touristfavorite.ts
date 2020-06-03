export const query = `query getAgencytouristfavorites($atAgency: Int!, $id: Int) {
        __typename
        touristfavorites(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id agenciesRomanianIdPool agenciesAbroadIdPool travelGroupResourceIdPool tripsOfferResourceIdPool guideResourceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool hostResourceIdPool

          }
        }
      }`
      export default `${query}`
     