export const mutation = `mutation deleteSimilarbytriptypeevent($eventIds: [Int] , $clientMutationId: String!) {
        __typename
        deleteSimilarbytriptypeevent(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     