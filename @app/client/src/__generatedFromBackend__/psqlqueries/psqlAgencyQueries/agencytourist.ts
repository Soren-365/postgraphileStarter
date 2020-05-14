export const query = `query getAgencyagencytourists($atAgency: Int!, $id: Int) {
        __typename
        agencytourists(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            agencyId touristId timeCreated

          }
        }
      }`
      export default `${query}`
     