export const query = `query Guidefavorite($id: Int!) {
        __typename
        guidefavorite(id: $id) {
            id agenciesRomanianIdPool agenciesAbroadIdPool travelGroupResourceIdPool

        }
      }`
      export default `${query}`
