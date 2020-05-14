export const mutation = `mutation createAgencydeal(,$tripOfferResourceIdPool: [Int] ,$guideResourceIdPool: [Int] ,$touristResouceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        createAgencydeal(input: {clientMutationId: $clientMutationId,agencydeal: {,tripOfferResourceIdPool: $tripOfferResourceIdPool ,guideResourceIdPool: $guideResourceIdPool ,touristResouceIdPool: $touristResouceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     