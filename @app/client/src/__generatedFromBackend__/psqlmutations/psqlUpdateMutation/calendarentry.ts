export const mutation = `mutation updateCalendarentry($id: Int ,$fromTimestamp: [Datetime]! ,$toTimestamp: [Datetime]! ,$resourceType: [Resourcetype] ,$comment: [String] ,$timeCreated: TIMESTAMP DEFAULT NOW , $id: String!) {
        __typename
        updateCalendarentry(input: {id: $id, patch: {,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,resourceType: $resourceType ,comment: $comment ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     