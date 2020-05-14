export const mutation = `mutation updateDate_($useTimeStamp: Boolean! ,$timeStamp: Datetime ,$year: String ,$month: String ,$day: String ,$allDayEvent: Boolean! ,$hour: String ,$minute: String ,$timeCreated: TIMESTAMP DEFAULT NOW( , $clientMutationId: String!) {
        __typename
        updateDate_(input: {clientMutationId: $clientMutationId, patch: {useTimeStamp: $useTimeStamp ,timeStamp: $timeStamp ,year: $year ,month: $month ,day: $day ,allDayEvent: $allDayEvent ,hour: $hour ,minute: $minute ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     