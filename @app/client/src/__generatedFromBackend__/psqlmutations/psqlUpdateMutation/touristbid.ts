export const mutation = `mutation updateTouristbid($id: Int ,$tripOfferResourceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] ,$hostResourceIdPool: Int , $id: String!) {
        __typename
        updateTouristbid(input: {id: $id, patch: {,tripOfferResourceIdPool: $tripOfferResourceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool ,hostResourceIdPool: $hostResourceIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     