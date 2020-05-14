export const mutation = `mutation updateTouristreview($id: Int ,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$halfStars: Int! ,$reviewText: String! ,$touristIdTarget: Int! ,$startDateTripEvent: Date! ,$byRomanian: Boolean , $clientMutationId: String!) {
        __typename
        updateTouristreview(input: {clientMutationId: $clientMutationId, patch: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,halfStars: $halfStars ,reviewText: $reviewText ,touristIdTarget: $touristIdTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     