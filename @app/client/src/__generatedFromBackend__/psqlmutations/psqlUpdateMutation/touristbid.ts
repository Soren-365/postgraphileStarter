export const mutation = `mutation updateTouristbid($id: Int ,$tripOfferResourceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        updateTouristbid(input: {clientMutationId: $clientMutationId, patch: {,tripOfferResourceIdPool: $tripOfferResourceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     