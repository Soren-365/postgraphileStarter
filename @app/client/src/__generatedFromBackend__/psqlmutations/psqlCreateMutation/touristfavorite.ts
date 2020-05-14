export const mutation = `mutation createTouristfavorite(,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$travelGroupResourceIdPool: [Int] ,$tripsOfferResourceIdPool: [Int] ,$guideResourceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        createTouristfavorite(input: {clientMutationId: $clientMutationId,touristfavorite: {,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,travelGroupResourceIdPool: $travelGroupResourceIdPool ,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,guideResourceIdPool: $guideResourceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     