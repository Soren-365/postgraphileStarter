export const mutation = `mutation updateReview($id: Int ,$publisherId: Int! ,$createdById: Int! ,$halfStars: Int ,$reviewText: String ,$resourceType: Resourcetype! ,$resourceId: Int! ,$publisherTarget: Int! ,$startDateTripEvent: Date ,$byRomanian: Boolean ,$isActive: Boolean ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateReview(input: {clientMutationId: $clientMutationId, patch: {,publisherId: $publisherId ,createdById: $createdById ,halfStars: $halfStars ,reviewText: $reviewText ,resourceType: $resourceType ,resourceId: $resourceId ,publisherTarget: $publisherTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian ,isActive: $isActive ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     