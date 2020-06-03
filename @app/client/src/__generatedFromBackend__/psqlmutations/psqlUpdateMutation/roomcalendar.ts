export const mutation = `mutation updateRoomcalendar($id: Int ,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$calendarentryId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateRoomcalendar(input: {id: $id, patch: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,calendarentryId: $calendarentryId ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     