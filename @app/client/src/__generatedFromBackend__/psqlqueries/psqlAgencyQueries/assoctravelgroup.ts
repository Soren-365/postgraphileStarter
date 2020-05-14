export const query = `query getAgencyassoctravelgroups($atAgency: Int!, $id: Int) {
        __typename
        assoctravelgroups(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            assocTravelGroupId travelGroupId atAgency timeCreated

          }
        }
      }`
      export default `${query}`
     