export const mutation = `mutation createCalendarentry(,$fromTimestamp: [Datetime]! ,$toTimestamp: [Datetime]! ,$resourceType: [Resourcetype] ,$comment: [String] ,$timeCreated: TIMESTAMP DEFAULT NOW( , $clientMutationId: String!) {
        __typename
        createCalendarentry(input: {clientMutationId: $clientMutationId,calendarentry: {,fromTimestamp: $fromTimestamp ,toTimestamp: $toTimestamp ,resourceType: $resourceType ,comment: $comment ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     