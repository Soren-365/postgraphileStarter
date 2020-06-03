export const query = `query Touristfavorite($id: Int!) {
        __typename
        touristfavorite(id: $id) {
            id agenciesRomanianIdPool agenciesAbroadIdPool travelGroupResourceIdPool tripsOfferResourceIdPool guideResourceIdPool eventResourceIdPool transportationResourceIdPool accomodationResourceIdPool hostResourceIdPool

        }
      }`
      export default `${query}`
