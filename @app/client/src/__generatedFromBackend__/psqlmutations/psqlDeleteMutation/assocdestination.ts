export const mutation = `mutation deleteAssocdestination($assocDestinationId: [Int] , $id: String!) {
        __typename
        deleteAssocdestination(input: {id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     