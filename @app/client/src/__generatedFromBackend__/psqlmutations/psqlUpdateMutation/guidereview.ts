export const mutation = `mutation updateGuidereview($id: Int ,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$halfStars: Int ,$reviewText: String ,$guideIdTarget: Int! ,$startDateTripEvent: Date ,$byRomanian: Boolean ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateGuidereview(input: {clientMutationId: $clientMutationId, patch: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,halfStars: $halfStars ,reviewText: $reviewText ,guideIdTarget: $guideIdTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     