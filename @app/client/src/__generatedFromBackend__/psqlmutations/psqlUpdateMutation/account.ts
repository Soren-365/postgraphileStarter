export const mutation = `mutation updateAccount($id: Int , $clientMutationId: String!) {
        __typename
        updateAccount(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     