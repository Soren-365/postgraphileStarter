export const mutation = `mutation updateTouristfavorite($id: Int ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$travelGroupResourceIdPool: [Int] ,$tripsOfferResourceIdPool: [Int] ,$guideResourceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        updateTouristfavorite(input: {clientMutationId: $clientMutationId, patch: {,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,travelGroupResourceIdPool: $travelGroupResourceIdPool ,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,guideResourceIdPool: $guideResourceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     