export const mutation = `mutation createGuidedeal(,$tripsOfferResourceIdPool: [Int] ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$touristResourceIdPool: Int , $id: String!) {
        __typename
        createGuidedeal(input: {id: $id,guidedeal: {,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,touristResourceIdPool: $touristResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     