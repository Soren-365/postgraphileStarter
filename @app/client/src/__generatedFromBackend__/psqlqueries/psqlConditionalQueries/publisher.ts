export const query = `query getConditionalPublisher(, $id:  number , $createdById:  number , $belongsToType:  string , $commandLogEntryId:  number[] ) {
        __typename
        publishers(condition: {id: $id ,,createdById: $createdById ,,belongsToType: $belongsToType ,,,,,commandLogEntryId: $commandLogEntryId ,, })  {
          nodes {
            id name createdById belongsToId belongsToType canReview canPublish isRomanian isActive commandLogEntryId timeCreated
 
          }
        }
      }`
      export default `${query}`
        