export const query = `query Guidedeal($id: Int!) {
        __typename
        guidedeal(id: $id) {
            id tripsOfferResourceIdPool agenciesRomanianIdPool agenciesAbroadIdPool
 
        }
      }`
      export default `${query}`
