export const mutation = `mutation updatePublisher($id: Int ,$name: String ,$createdById: Int ,$belongsToId: Int ,$belongsToType: Resourcetype ,$canReview: Boolean ,$canPublish: Boolean ,$isRomanian: Boolean ,$isActive: Boolean ,$commandLogEntryId: [Int] ,$timeCreated: Datetime ,$timeCommand: Datetime , $id: String!) {
        __typename
        updatePublisher(input: {id: $id, patch: {,name: $name ,createdById: $createdById ,belongsToId: $belongsToId ,belongsToType: $belongsToType ,canReview: $canReview ,canPublish: $canPublish ,isRomanian: $isRomanian ,isActive: $isActive ,commandLogEntryId: $commandLogEntryId ,timeCreated: $timeCreated ,timeCommand: $timeCommand }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     