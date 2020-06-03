export const query = `query getConditionalAssocdestination(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        assocdestinations(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            assocDestinationId destinationId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        