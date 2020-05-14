export const query = `query getAgencyagencytourists($atAgency: Int!) {
        __typename
        agencytourists(condition: {atAgency: $atAgency }) {
          nodes {
            agencyId,touristId,timeCreated

          }
        }
      }`
      export default `${query}`
     