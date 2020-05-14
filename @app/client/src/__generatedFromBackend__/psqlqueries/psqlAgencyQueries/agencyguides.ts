export const query = `query getAgencyagencyguides($atAgency: Int!) {
        __typename
        agencyguides(condition: {atAgency: $atAgency }) {
          nodes {
            agencyId,guideId,timeCreated

          }
        }
      }`
      export default `${query}`
     