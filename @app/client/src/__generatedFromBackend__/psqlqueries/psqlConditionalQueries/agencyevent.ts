export const query = `query getConditionalAgencyevent(, $eventId:  number , $timeCreated:  string ) {
        __typename
        agencyevents(condition: {,eventId: $eventId ,timeCreated: $timeCreated  })  {
          nodes {
            agencyId eventId timeCreated
 
          }
        }
      }`
      export default `${query}`
        