export const mutation = `mutation createReview(,$publisherId: Int! ,$createdById: Int! ,$halfStars: Int ,$reviewText: String ,$resourceType: Resourcetype! ,$resourceId: Int! ,$publisherTarget: Int! ,$startDateTripEvent: Date ,$byRomanian: Boolean ,$isActive: Boolean ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createReview(input: {clientMutationId: $clientMutationId,review: {,publisherId: $publisherId ,createdById: $createdById ,halfStars: $halfStars ,reviewText: $reviewText ,resourceType: $resourceType ,resourceId: $resourceId ,publisherTarget: $publisherTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian ,isActive: $isActive ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     