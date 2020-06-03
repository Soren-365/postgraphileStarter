export const mutation = `mutation createRoomcalendar(,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$calendarentryId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        createRoomcalendar(input: {id: $id,roomcalendar: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,calendarentryId: $calendarentryId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     