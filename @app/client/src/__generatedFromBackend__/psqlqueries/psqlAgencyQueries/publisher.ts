export const query = `query getAgencypublishers($atAgency: Int!, $id: Int) {
        __typename
        publishers(condition: {atAgency: $atAgency, id: $id }) {
          nodes {
            id name createdById belongsToId belongsToType canReview canPublish isRomanian isActive commandLogEntryId timeCreated timeCommand

          }
        }
      }`
      export default `${query}`
     