export const mutation = `mutation deleteMediabook($id: Int , $clientMutationId: String!) {
        __typename
        deleteMediabook(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     