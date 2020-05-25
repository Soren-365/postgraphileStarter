export const query = `query getConditionalRoomcalendar(, $id:  number , $publisherId:  number , $createdById:  number , $calendarentryId:  number ) {
        __typename
        roomcalendars(condition: {id: $id ,publisherId: $publisherId ,createdById: $createdById ,,calendarentryId: $calendarentryId , })  {
          nodes {
            id publisherId createdById isActive calendarentryId timeCreated

          }
        }
      }`
      export default `${query}`
        