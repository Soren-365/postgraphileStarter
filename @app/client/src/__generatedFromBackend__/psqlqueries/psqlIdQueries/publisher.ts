export const query = `query Publisher($id: Int!) {
        __typename
        publisher(id: $id) {
            id name createdById belongsToId belongsToType canReview canPublish isRomanian isActive commandLogEntryId timeCreated
 
        }
      }`
      export default `${query}`
