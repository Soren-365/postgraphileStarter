export const mutation = `mutation createDate_($useTimeStamp: Boolean! ,$timeStamp: Datetime ,$year: String ,$month: String ,$day: String ,$allDayEvent: Boolean! ,$hour: String ,$minute: String ,$timeCreated: TIMESTAMP DEFAULT NOW( , $clientMutationId: String!) {
        __typename
        createDate_(input: {clientMutationId: $clientMutationId,date_: {useTimeStamp: $useTimeStamp ,timeStamp: $timeStamp ,year: $year ,month: $month ,day: $day ,allDayEvent: $allDayEvent ,hour: $hour ,minute: $minute ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     