export const query = `query getConditionalAssochost(, $hostId:  number , $atAgency:  number , $timeCreated:  string ) {
        __typename
        assochosts(condition: {,hostId: $hostId ,atAgency: $atAgency ,timeCreated: $timeCreated  })  {
          nodes {
            assocHostId hostId atAgency timeCreated
 
          }
        }
      }`
      export default `${query}`
        