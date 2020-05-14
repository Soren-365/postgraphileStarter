export const query = `query getAgencyagencytripoffers($atAgency: Int!, $id: Int) {
        __typename
        agencytripoffers(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            agencyId tripOfferId timeCreated

          }
        }
      }`
      export default `${query}`
     