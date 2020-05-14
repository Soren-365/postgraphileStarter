export const mutation = `mutation deleteSimilarbytriptypetransport($transportIds: [Int] , $clientMutationId: String!) {
        __typename
        deleteSimilarbytriptypetransport(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     