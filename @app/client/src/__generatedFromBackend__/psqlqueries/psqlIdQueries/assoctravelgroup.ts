export const query = `query Assoctravelgroup($assocTravelGroupId: Int!) {
        __typename
        assoctravelgroup(id: $assocTravelGroupId) {
            assocTravelGroupId travelGroupId atAgency timeCreated
 
        }
      }`
      export default `${query}`
