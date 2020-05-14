export const query = `query getAgencyassoctravelgroups($atAgency: Int!) {
        __typename
        assoctravelgroups(condition: {atAgency: $atAgency }) {
          nodes {
            assocTravelGroupId,travelGroupId,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     