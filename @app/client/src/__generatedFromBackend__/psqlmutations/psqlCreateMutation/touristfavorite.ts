export const mutation = `mutation createTouristfavorite(,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$travelGroupResourceIdPool: [Int] ,$tripsOfferResourceIdPool: [Int] ,$guideResourceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] ,$hostResourceIdPool: Int , $id: String!) {
        __typename
        createTouristfavorite(input: {id: $id,touristfavorite: {,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,travelGroupResourceIdPool: $travelGroupResourceIdPool ,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,guideResourceIdPool: $guideResourceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool ,hostResourceIdPool: $hostResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     