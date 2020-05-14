export const mutation = `mutation createRoomcalendar(,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$calendarentryId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createRoomcalendar(input: {clientMutationId: $clientMutationId,roomcalendar: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,calendarentryId: $calendarentryId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     