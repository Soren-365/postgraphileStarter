export const mutation = `mutation deleteAccounting($id: Int , $clientMutationId: String!) {
        __typename
        deleteAccounting(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     