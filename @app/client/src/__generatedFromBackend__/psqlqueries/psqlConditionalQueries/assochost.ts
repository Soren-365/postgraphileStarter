export const query = `query getConditionalAssochost(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        assochosts(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            assocHostId hostId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        