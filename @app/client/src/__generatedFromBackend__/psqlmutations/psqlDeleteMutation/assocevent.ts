export const mutation = `mutation deleteAssocevent($assocEventId: [Int] , $id: String!) {
        __typename
        deleteAssocevent(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     