export const query = `query getAgencyagencytransports($atAgency: Int!, $id: Int) {
        __typename
        agencytransports(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            agencyId transportId timeCreated

          }
        }
      }`
      export default `${query}`
     