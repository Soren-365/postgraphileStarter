export const mutation = `mutation deleteDate_($useTimeStamp: Boolean! , $id: String!) {
        __typename
        deleteDate_(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     