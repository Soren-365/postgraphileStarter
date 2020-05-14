export const query = `query getAgencyagencyhosts($atAgency: Int!) {
        __typename
        agencyhosts(condition: {atAgency: $atAgency }) {
          nodes {
            agencyId,hostId,timeCreated

          }
        }
      }`
      export default `${query}`
     