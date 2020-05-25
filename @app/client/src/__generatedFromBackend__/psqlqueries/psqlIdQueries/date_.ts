export const query = `query Date_($useTimeStamp: Int!) {
        __typename
        date_(id: $useTimeStamp) {
            useTimeStamp

        }
      }`
      export default `${query}`
