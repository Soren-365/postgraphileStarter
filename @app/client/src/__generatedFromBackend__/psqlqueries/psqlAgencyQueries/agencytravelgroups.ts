export const query = `query getAgencyagencytravelgroups($atAgency: Int!) {
        __typename
        agencytravelgroups(condition: {atAgency: $atAgency }) {
          nodes {
            agencyId,travelGroupId,timeCreated

          }
        }
      }`
      export default `${query}`
     