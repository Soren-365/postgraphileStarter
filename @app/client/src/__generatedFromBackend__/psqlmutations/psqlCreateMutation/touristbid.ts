export const mutation = `mutation createTouristbid(,$tripOfferResourceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        createTouristbid(input: {clientMutationId: $clientMutationId,touristbid: {,tripOfferResourceIdPool: $tripOfferResourceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     