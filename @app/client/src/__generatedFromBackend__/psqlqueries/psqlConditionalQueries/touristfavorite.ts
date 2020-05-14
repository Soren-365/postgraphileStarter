export const query = `query getConditionalTouristfavorite(, $id:  number ) {
        __typename
        touristfavorites(condition: {id: $id ,,,,,,,, })  {
          nodes {
            id agenciesRomanianIdPool agenciesAbroadIdPool travelGroupResourceIdPool tripsOfferResourceIdPool guideResourceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool
 
          }
        }
      }`
      export default `${query}`
        