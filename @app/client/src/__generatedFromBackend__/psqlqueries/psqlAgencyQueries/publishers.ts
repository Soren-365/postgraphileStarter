export const query = `query getAgencypublishers($atAgency: Int!) {
        __typename
        publishers(condition: {atAgency: $atAgency }) {
          nodes {
            id,name,createdById,belongsToId,belongsToType,canReview,canPublish,isRomanian,isActive,commandLogEntryId,timeCreated

          }
        }
      }`
      export default `${query}`
     