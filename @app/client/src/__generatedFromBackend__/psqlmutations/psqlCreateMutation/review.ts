export const mutation = `mutation createReview(,$publisherId: Int! ,$createdById: Int! ,$halfStars: Int ,$reviewText: String ,$resourceType: Resourcetype! ,$resourceId: Int! ,$publisherTarget: Int! ,$startDateTripEvent: Date ,$byRomanian: Boolean ,$isActive: Boolean ,$timeCreated: Datetime , $id: String!) {
        __typename
        createReview(input: {id: $id,review: {,publisherId: $publisherId ,createdById: $createdById ,halfStars: $halfStars ,reviewText: $reviewText ,resourceType: $resourceType ,resourceId: $resourceId ,publisherTarget: $publisherTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian ,isActive: $isActive ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     