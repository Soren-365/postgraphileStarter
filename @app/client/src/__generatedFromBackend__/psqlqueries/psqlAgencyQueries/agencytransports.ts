export const query = `query getAgencyagencytransports($atAgency: Int!) {
        __typename
        agencytransports(condition: {atAgency: $atAgency }) {
          nodes {
            agencyId,transportId,timeCreated

          }
        }
      }`
      export default `${query}`
     