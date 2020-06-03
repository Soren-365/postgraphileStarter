export const mutation = `mutation createDate_($useTimeStamp: Boolean! ,$timeStamp: Datetime ,$year: String ,$month: String ,$day: String ,$allDayEvent: Boolean! ,$hour: String ,$minute: String ,$timeCreated: Datetime , $id: String!) {
        __typename
        createDate_(input: {id: $id,date_: {useTimeStamp: $useTimeStamp ,timeStamp: $timeStamp ,year: $year ,month: $month ,day: $day ,allDayEvent: $allDayEvent ,hour: $hour ,minute: $minute ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     