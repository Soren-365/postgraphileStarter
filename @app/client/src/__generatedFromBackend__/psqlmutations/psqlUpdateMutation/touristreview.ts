export const mutation = `mutation updateTouristreview($id: Int ,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$halfStars: Int! ,$reviewText: String! ,$touristIdTarget: Int! ,$startDateTripEvent: Date! ,$byRomanian: Boolean ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateTouristreview(input: {id: $id, patch: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,halfStars: $halfStars ,reviewText: $reviewText ,touristIdTarget: $touristIdTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     