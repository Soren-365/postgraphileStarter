export const mutation = `mutation updateGuidefavorite($id: Int ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$travelGroupResourceIdPool: Int , $id: String!) {
        __typename
        updateGuidefavorite(input: {id: $id, patch: {,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,travelGroupResourceIdPool: $travelGroupResourceIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     