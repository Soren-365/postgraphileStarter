export const mutation = `mutation createTouristreview(,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$halfStars: Int! ,$reviewText: String! ,$touristIdTarget: Int! ,$startDateTripEvent: Date! ,$byRomanian: Boolean ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createTouristreview(input: {clientMutationId: $clientMutationId,touristreview: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,halfStars: $halfStars ,reviewText: $reviewText ,touristIdTarget: $touristIdTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     