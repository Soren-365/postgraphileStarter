export const mutation = `mutation createPublisher(,$name: String ,$createdById: Int ,$belongsToId: Int ,$belongsToType: Resourcetype ,$canReview: Boolean ,$canPublish: Boolean ,$isRomanian: Boolean ,$isActive: Boolean ,$commandLogEntryId: [Int] ,$timeCreated: Datetime ,$timeCommand: Datetime , $id: String!) {
        __typename
        createPublisher(input: {id: $id,publisher: {,name: $name ,createdById: $createdById ,belongsToId: $belongsToId ,belongsToType: $belongsToType ,canReview: $canReview ,canPublish: $canPublish ,isRomanian: $isRomanian ,isActive: $isActive ,commandLogEntryId: $commandLogEntryId ,timeCreated: $timeCreated ,timeCommand: $timeCommand }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     