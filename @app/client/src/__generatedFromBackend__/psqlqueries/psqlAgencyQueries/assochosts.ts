export const query = `query getAgencyassochosts($atAgency: Int!) {
        __typename
        assochosts(condition: {atAgency: $atAgency }) {
          nodes {
            assocHostId,hostId,atAgency,timeCreated

          }
        }
      }`
      export default `${query}`
     