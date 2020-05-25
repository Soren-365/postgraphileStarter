export const mutation = `mutation updateCommandlogentry($id: Int , $clientMutationId: String!) {
        __typename
        updateCommandlogentry(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     