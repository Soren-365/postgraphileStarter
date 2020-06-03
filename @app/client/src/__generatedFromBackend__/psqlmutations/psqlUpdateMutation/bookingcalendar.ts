export const mutation = `mutation updateBookingcalendar($id: Int ,$belongsToId: Int ,$belongsToType: Resourcetype ,$createdById: Int ,$isActive: Boolean ,$fromTimestamp: [Datetime]! ,$toTimestamp: [Datetime]! ,$resourceType: [Resourcetype] ,$comment: [String] ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateBookingcalendar(input: {id: $id, patch: {,belongsToId: $belongsToId ,belongsToType: $belongsToType ,createdById: $createdById ,isActive: $isActive ,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,resourceType: $resourceType ,comment: $comment ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     