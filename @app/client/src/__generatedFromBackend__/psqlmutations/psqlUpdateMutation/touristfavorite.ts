export const mutation = `mutation updateTouristfavorite($id: Int ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$travelGroupResourceIdPool: [Int] ,$tripsOfferResourceIdPool: [Int] ,$guideResourceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] ,$hostResourceIdPool: Int , $id: String!) {
        __typename
        updateTouristfavorite(input: {id: $id, patch: {,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,travelGroupResourceIdPool: $travelGroupResourceIdPool ,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,guideResourceIdPool: $guideResourceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool ,hostResourceIdPool: $hostResourceIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     