export const mutation = `mutation deleteAccount($id: Int , $clientMutationId: String!) {
        __typename
        deleteAccount(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     