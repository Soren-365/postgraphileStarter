export const query = `query getConditionalAssoctravelgroup(, $travelGroupId:  number , $timeCreated:  string ) {
        __typename
        assoctravelgroups(condition: {,travelGroupId: $travelGroupId ,,timeCreated: $timeCreated  })  {
          nodes {
            assocTravelGroupId travelGroupId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        