export const mutation = `mutation createTouristdeal(,$tripsOfferResourceIdPool: [Int] ,$guideOfferResourceIdPool: [Int] ,$agenciesRomanianIdPool: [Int] ,$agenciesAbroadIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        createTouristdeal(input: {clientMutationId: $clientMutationId,touristdeal: {,tripsOfferResourceIdPool: $tripsOfferResourceIdPool ,guideOfferResourceIdPool: $guideOfferResourceIdPool ,agenciesRomanianIdPool: $agenciesRomanianIdPool ,agenciesAbroadIdPool: $agenciesAbroadIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     