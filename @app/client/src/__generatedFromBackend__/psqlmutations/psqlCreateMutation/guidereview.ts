export const mutation = `mutation createGuidereview(,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$halfStars: Int ,$reviewText: String ,$guideIdTarget: Int! ,$startDateTripEvent: Date ,$byRomanian: Boolean ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createGuidereview(input: {clientMutationId: $clientMutationId,guidereview: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,halfStars: $halfStars ,reviewText: $reviewText ,guideIdTarget: $guideIdTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     