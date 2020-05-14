export const mutation = `mutation deleteSimilarbytriptypedestination($destinationIds: [Int] , $clientMutationId: String!) {
        __typename
        deleteSimilarbytriptypedestination(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     