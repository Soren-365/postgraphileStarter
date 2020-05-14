export const query = `query getConditionalTouristdeal(, $id:  number ) {
        __typename
        touristdeals(condition: {id: $id ,,,,,,, })  {
          nodes {
            id tripsOfferResourceIdPool guideOfferResourceIdPool agenciesRomanianIdPool agenciesAbroadIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool
 
          }
        }
      }`
      export default `${query}`
        