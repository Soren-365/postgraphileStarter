export const mutation = `mutation updateAgencydeal($id: Int ,$tripOfferResourceIdPool: [Int] ,$guideResourceIdPool: [Int] ,$touristResouceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] , $clientMutationId: String!) {
        __typename
        updateAgencydeal(input: {clientMutationId: $clientMutationId, patch: {,tripOfferResourceIdPool: $tripOfferResourceIdPool ,guideResourceIdPool: $guideResourceIdPool ,touristResouceIdPool: $touristResouceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     