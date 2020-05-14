export const query = `query Roomcalendar($id: Int!) {
        __typename
        roomcalendar(id: $id) {
            id publisherId createdById isActive calendarentryId timeCreated
 
        }
      }`
      export default `${query}`
