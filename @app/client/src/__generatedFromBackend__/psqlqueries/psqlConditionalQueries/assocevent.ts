export const query = `query getConditionalAssocevent(, $eventId:  number , $timeCreated:  string ) {
        __typename
        assocevents(condition: {,eventId: $eventId ,,timeCreated: $timeCreated  })  {
          nodes {
            assocEventId eventId atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        