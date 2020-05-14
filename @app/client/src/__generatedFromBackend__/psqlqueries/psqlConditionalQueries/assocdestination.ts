export const query = `query getConditionalAssocdestination(, $destinationId:  number , $timeCreated:  string ) {
        __typename
        assocdestinations(condition: {,destinationId: $destinationId ,,timeCreated: $timeCreated  })  {
          nodes {
            assocDestinationId destinationId atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        