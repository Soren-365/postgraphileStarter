export const mutation = `mutation deleteAssocevent($assocEventId: [Int] , $clientMutationId: String!) {
        __typename
        deleteAssocevent(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     