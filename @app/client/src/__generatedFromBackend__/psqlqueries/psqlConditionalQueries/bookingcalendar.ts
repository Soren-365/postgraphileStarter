export const query = `query getConditionalBookingcalendar(, $id:  number , $belongsToId:  number , $belongsToType:  string , $createdById:  number ) {
        __typename
        bookingcalendars(condition: {id: $id ,belongsToId: $belongsToId ,belongsToType: $belongsToType ,createdById: $createdById ,,,,,, })  {
          nodes {
            id belongsToId belongsToType createdById isActive fromTimestamp toTimestamp resourceType comment timeCreated

          }
        }
      }`
      export default `${query}`
        