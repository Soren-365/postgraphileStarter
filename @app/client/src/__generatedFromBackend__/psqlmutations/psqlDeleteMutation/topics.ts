export const mutation = `mutation deleteTopics(undefined, $clientMutationId: String!) {
        __typename
        deleteTopics(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     