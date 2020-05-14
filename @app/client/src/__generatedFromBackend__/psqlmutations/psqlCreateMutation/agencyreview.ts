export const mutation = `mutation createAgencyreview(,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$halfStars: Int ,$reviewText: String ,$agencyIdTarget: Int! ,$startDateTripEvent: Date ,$byRomanian: Boolean , $clientMutationId: String!) {
        __typename
        createAgencyreview(input: {clientMutationId: $clientMutationId,agencyreview: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,halfStars: $halfStars ,reviewText: $reviewText ,agencyIdTarget: $agencyIdTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     