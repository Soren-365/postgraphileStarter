export const mutation = `mutation createTouristbid(,$tripOfferResourceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] ,$hostResourceIdPool: Int , $id: String!) {
        __typename
        createTouristbid(input: {id: $id,touristbid: {,tripOfferResourceIdPool: $tripOfferResourceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool ,hostResourceIdPool: $hostResourceIdPool }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     