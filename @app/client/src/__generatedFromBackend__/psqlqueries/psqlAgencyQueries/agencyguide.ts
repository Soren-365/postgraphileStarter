export const query = `query getAgencyagencyguides($atAgency: Int!, $id: Int) {
        __typename
        agencyguides(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            agencyId guideId timeCreated

          }
        }
      }`
      export default `${query}`
     