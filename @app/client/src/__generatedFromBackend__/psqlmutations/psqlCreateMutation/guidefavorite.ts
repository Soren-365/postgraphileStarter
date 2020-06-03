export const mutation = `mutation createGuidefavorite(,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$travelGroupResourceIdPool: Int , $id: String!) {
        __typename
        createGuidefavorite(input: {id: $id,guidefavorite: {,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,travelGroupResourceIdPool: $travelGroupResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     