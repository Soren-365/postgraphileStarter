export const mutation = `mutation updateAgencydeal($id: Int ,$tripOfferResourceIdPool: [Int] ,$guideResourceIdPool: [Int] ,$touristResouceIdPool: [Int] ,$eventResourceIdPool: [Int] ,$transportationResourceIdPool: [Int] ,$accomodationResourceIdPool: [Int] , $id: String!) {
        __typename
        updateAgencydeal(input: {id: $id, patch: {,tripOfferResourceIdPool: $tripOfferResourceIdPool ,guideResourceIdPool: $guideResourceIdPool ,touristResouceIdPool: $touristResouceIdPool ,eventResourceIdPool: $eventResourceIdPool ,transportationResourceIdPool: $transportationResourceIdPool ,accomodationResourceIdPool: $accomodationResourceIdPool }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     