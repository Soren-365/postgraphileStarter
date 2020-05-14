export const query = `query getAgencyagencyhosts($atAgency: Int!, $id: Int) {
        __typename
        agencyhosts(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            agencyId hostId timeCreated

          }
        }
      }`
      export default `${query}`
     