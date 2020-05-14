export const mutation = `mutation updateBookingcalendar($id: Int ,$belongsToId: Int ,$belongsToType: Resourcetype ,$createdById: Int ,$isActive: Boolean ,$fromTimestamp: [Datetime]! ,$toTimestamp: [Datetime]! ,$resourceType: [Resourcetype] ,$comment: [String] , $clientMutationId: String!) {
        __typename
        updateBookingcalendar(input: {clientMutationId: $clientMutationId, patch: {,belongsToId: $belongsToId ,belongsToType: $belongsToType ,createdById: $createdById ,isActive: $isActive ,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,resourceType: $resourceType ,comment: $comment }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     