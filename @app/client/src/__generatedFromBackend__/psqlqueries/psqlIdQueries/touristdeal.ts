export const query = `query Touristdeal($id: Int!) {
        __typename
        touristdeal(id: $id) {
            id tripsOfferResourceIdPool guideOfferResourceIdPool agenciesRomanianIdPool agenciesAbroadIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool
 
        }
      }`
      export default `${query}`
