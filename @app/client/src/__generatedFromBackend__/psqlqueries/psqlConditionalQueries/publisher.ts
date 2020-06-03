export const query = `query getConditionalPublisher(, $undefined:  undefined ) {
        __typename
        publishers(condition: {undefined: $undefined ,,,,,,,,,,, })  {
          nodes {
            id name createdById belongsToId belongsToType canReview canPublish isRomanian isActive commandLogEntryId timeCreated timeCommand

          }
        }
      }`
      export default `${query}`
        