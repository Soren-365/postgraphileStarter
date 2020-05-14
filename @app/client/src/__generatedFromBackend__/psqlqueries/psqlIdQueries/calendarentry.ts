export const query = `query Calendarentry($id: Int!) {
        __typename
        calendarentry(id: $id) {
            id fromTimestamp toTimestamp resourceType comment timeCreated
 
        }
      }`
      export default `${query}`
