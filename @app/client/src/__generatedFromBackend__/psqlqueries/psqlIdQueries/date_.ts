export const query = `query Date_($useTimeStamp: Int!) {
        __typename
        date_(id: $useTimeStamp) {
            useTimeStamp timeStamp year month day allDayEvent hour minute timeCreated

        }
      }`
      export default `${query}`
