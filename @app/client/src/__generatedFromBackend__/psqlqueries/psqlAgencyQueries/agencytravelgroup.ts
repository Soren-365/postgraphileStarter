export const query = `query getAgencyagencytravelgroups($atAgency: Int!, $id: Int) {
        __typename
        agencytravelgroups(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            agencyId travelGroupId timeCreated

          }
        }
      }`
      export default `${query}`
     