export const mutation = `mutation updateCalendarentry($id: Int ,$fromTimestamp: [Datetime]! ,$toTimestamp: [Datetime]! ,$resourceType: [Resourcetype] ,$comment: [String] ,$timeCreated: TIMESTAMP DEFAULT NOW( , $clientMutationId: String!) {
        __typename
        updateCalendarentry(input: {clientMutationId: $clientMutationId, patch: {,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,resourceType: $resourceType ,comment: $comment ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     