export const mutation = `mutation updateTouristdeal($id: Int ,$tripsOfferResourceIdPool: [Int] ,$guideOfferResourceIdPool: [Int] ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        updateTouristdeal(input: {clientMutationId: $clientMutationId, patch: {,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,guideOfferResourceIdPool: $guideOfferResourceIdPool ,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     