export const query = `query Assochost($assocHostId: Int!) {
        __typename
        assochost(id: $assocHostId) {
            assocHostId hostId atAgency timeCreated
 
        }
      }`
      export default `${query}`
