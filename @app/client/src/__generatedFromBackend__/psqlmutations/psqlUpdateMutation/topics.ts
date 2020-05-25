export const mutation = `mutation updateTopics(, $clientMutationId: String!) {
        __typename
        updateTopics(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     