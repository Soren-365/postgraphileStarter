export const query = `query getAgencyagencyusers($atAgency: Int!) {
        __typename
        agencyusers(condition: {atAgency: $atAgency }) {
          nodes {
            agencyId,userId,timeCreated

          }
        }
      }`
      export default `${query}`
     