export const query = `query getAgencybids($atAgency: Int!) {
        __typename
        bids(condition: {atAgency: $atAgency }) {
          nodes {
            id,publisherId,createdById,bidAmount,isActive,timeCreated

          }
        }
      }`
      export default `${query}`
     