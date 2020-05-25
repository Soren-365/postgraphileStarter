export const mutation = `mutation createAgencyreview(,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$halfStars: Int ,$reviewText: String ,$agencyIdTarget: Int! ,$startDateTripEvent: Date ,$byRomanian: Boolean ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencyreview(input: {clientMutationId: $clientMutationId,agencyreview: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,halfStars: $halfStars ,reviewText: $reviewText ,agencyIdTarget: $agencyIdTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     