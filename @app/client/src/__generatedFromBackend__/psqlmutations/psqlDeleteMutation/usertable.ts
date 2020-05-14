export const mutation = `mutation deleteUsertable($id: Int! , $clientMutationId: String!) {
        __typename
        deleteUsertable(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     