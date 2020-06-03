export const mutation = `mutation updateTouristdeal($id: Int ,$tripsOfferResourceIdPool: [Int] ,$guideOfferResourceIdPool: [Int] ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] ,$hostResourceIdPool: Int , $id: String!) {
        __typename
        updateTouristdeal(input: {id: $id, patch: {,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,guideOfferResourceIdPool: $guideOfferResourceIdPool ,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool ,hostResourceIdPool: $hostResourceIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     