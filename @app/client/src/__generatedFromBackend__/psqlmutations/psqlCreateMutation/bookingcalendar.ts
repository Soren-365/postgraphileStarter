export const mutation = `mutation createBookingcalendar(,$belongsToId: Int ,$belongsToType: Resourcetype ,$createdById: Int ,$isActive: Boolean ,$fromTimestamp: [Datetime]! ,$toTimestamp: [Datetime]! ,$resourceType: [Resourcetype] ,$comment: [String] ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createBookingcalendar(input: {clientMutationId: $clientMutationId,bookingcalendar: {,belongsToId: $belongsToId ,belongsToType: $belongsToType ,createdById: $createdById ,isActive: $isActive ,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,resourceType: $resourceType ,comment: $comment ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     