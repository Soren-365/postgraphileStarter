export const mutation = `mutation updateGuidedeal($id: Int ,$tripsOfferResourceIdPool: [Int] ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$touristResourceIdPool: Int , $id: String!) {
        __typename
        updateGuidedeal(input: {id: $id, patch: {,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,touristResourceIdPool: $touristResourceIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     