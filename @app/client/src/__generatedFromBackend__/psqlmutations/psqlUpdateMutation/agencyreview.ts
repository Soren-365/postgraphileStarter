export const mutation = `mutation updateAgencyreview($id: Int ,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$halfStars: Int ,$reviewText: String ,$agencyIdTarget: Int! ,$startDateTripEvent: Date ,$byRomanian: Boolean , $clientMutationId: String!) {
        __typename
        updateAgencyreview(input: {clientMutationId: $clientMutationId, patch: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,halfStars: $halfStars ,reviewText: $reviewText ,agencyIdTarget: $agencyIdTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     