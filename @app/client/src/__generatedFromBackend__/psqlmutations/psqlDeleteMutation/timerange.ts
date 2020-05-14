export const mutation = `mutation deleteTimerange($id: Int , $clientMutationId: String!) {
        __typename
        deleteTimerange(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     