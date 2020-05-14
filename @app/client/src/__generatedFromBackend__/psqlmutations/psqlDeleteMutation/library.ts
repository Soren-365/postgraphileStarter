export const mutation = `mutation deleteLibrary($id: Int , $clientMutationId: String!) {
        __typename
        deleteLibrary(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     