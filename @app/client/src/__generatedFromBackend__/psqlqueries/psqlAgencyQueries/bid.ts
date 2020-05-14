export const query = `query getAgencybids($atAgency: Int!, $id: Int) {
        __typename
        bids(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id publisherId createdById bidAmount isActive timeCreated

          }
        }
      }`
      export default `${query}`
     