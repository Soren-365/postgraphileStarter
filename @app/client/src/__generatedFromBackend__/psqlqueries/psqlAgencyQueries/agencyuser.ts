export const query = `query getAgencyagencyusers($atAgency: Int!, $id: Int) {
        __typename
        agencyusers(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            agencyId userId timeCreated

          }
        }
      }`
      export default `${query}`
     