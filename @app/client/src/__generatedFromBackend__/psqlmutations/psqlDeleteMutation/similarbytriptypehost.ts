export const mutation = `mutation deleteSimilarbytriptypehost($hostIds: [Int] , $clientMutationId: String!) {
        __typename
        deleteSimilarbytriptypehost(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     