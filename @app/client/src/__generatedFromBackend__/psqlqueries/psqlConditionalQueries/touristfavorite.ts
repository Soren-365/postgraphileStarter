export const query = `query getConditionalTouristfavorite(, $undefined:  undefined ) {
        __typename
        touristfavorites(condition: {undefined: $undefined ,,,,,,,,, })  {
          nodes {
            id agenciesRomanianIdPool agenciesAbroadIdPool travelGroupResourceIdPool tripsOfferResourceIdPool guideResourceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool hostResourceIdPool

          }
        }
      }`
      export default `${query}`
        