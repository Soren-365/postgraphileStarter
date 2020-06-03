export const query = `query getConditionalAssocevent(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        assocevents(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            assocEventId eventId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        