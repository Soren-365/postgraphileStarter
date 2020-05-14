export const mutation = `mutation updateRoomcalendar($id: Int ,$publisherId: Int! ,$createdById: Int! ,$isActive: Boolean ,$calendarentryId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateRoomcalendar(input: {clientMutationId: $clientMutationId, patch: {,publisherId: $publisherId ,createdById: $createdById ,isActive: $isActive ,calendarentryId: $calendarentryId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     