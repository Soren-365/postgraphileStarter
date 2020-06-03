export const mutation = `mutation createCalendarentry(,$fromTimestamp: [Datetime]! ,$toTimestamp: [Datetime]! ,$resourceType: [Resourcetype] ,$comment: [String] ,$timeCreated: TIMESTAMP DEFAULT NOW , $id: String!) {
        __typename
        createCalendarentry(input: {id: $id,calendarentry: {,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,resourceType: $resourceType ,comment: $comment ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     