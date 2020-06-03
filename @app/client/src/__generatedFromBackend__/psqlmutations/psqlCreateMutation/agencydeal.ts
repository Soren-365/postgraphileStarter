export const mutation = `mutation createAgencydeal(,$tripOfferResourceIdPool: [Int] ,$guideResourceIdPool: [Int] ,$touristResouceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] , $id: String!) {
        __typename
        createAgencydeal(input: {id: $id,agencydeal: {,tripOfferResourceIdPool: $tripOfferResourceIdPool ,guideResourceIdPool: $guideResourceIdPool ,touristResouceIdPool: $touristResouceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     