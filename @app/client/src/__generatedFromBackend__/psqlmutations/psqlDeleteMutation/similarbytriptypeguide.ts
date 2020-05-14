export const mutation = `mutation deleteSimilarbytriptypeguide($guideIds: [Int] , $clientMutationId: String!) {
        __typename
        deleteSimilarbytriptypeguide(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     