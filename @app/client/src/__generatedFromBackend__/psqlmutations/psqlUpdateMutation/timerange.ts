export const mutation = `mutation updateTimerange($id: Int , $clientMutationId: String!) {
        __typename
        updateTimerange(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     