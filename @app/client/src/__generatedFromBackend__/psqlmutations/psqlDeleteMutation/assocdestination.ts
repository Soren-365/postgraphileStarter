export const mutation = `mutation deleteAssocdestination($assocDestinationId: [Int] , $clientMutationId: String!) {
        __typename
        deleteAssocdestination(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     