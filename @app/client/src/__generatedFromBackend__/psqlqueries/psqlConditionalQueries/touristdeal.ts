export const query = `query getConditionalTouristdeal(, $undefined:  undefined ) {
        __typename
        touristdeals(condition: {undefined: $undefined ,,,,,,,, })  {
          nodes {
            id tripsOfferResourceIdPool guideOfferResourceIdPool agenciesRomanianIdPool agenciesAbroadIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool hostResourceIdPool

          }
        }
      }`
      export default `${query}`
        