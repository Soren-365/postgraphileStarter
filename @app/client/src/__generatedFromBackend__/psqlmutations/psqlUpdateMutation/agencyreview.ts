export const mutation = `mutation updateAgencyreview($id: Int ,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$halfStars: Int ,$reviewText: String ,$agencyIdTarget: Int! ,$startDateTripEvent: Date ,$byRomanian: Boolean ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAgencyreview(input: {id: $id, patch: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,halfStars: $halfStars ,reviewText: $reviewText ,agencyIdTarget: $agencyIdTarget ,startDateTripEvent: $startDateTripEvent ,byRomanian: $byRomanian ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     