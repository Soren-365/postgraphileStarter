export const query = `query getConditionalAssoctravelgroup(, $undefined:  undefined , $undefined:  undefined ) {
        __typename
        assoctravelgroups(condition: {,undefined: $undefined ,undefined: $undefined , })  {
          nodes {
            assocTravelGroupId travelGroupId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
        