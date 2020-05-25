export const query = `query Bookingcalendar($id: Int!) {
        __typename
        bookingcalendar(id: $id) {
            id belongsToId belongsToType createdById isActive fromTimestamp toTimestamp resourceType comment timeCreated

        }
      }`
      export default `${query}`
