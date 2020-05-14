export const query = `query getAgencyagencytripoffers($atAgency: Int!) {
        __typename
        agencytripoffers(condition: {atAgency: $atAgency }) {
          nodes {
            agencyId,tripOfferId,timeCreated

          }
        }
      }`
      export default `${query}`
     