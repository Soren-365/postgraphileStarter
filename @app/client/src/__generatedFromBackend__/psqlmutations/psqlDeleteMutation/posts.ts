export const mutation = `mutation deletePosts($id: Int , $clientMutationId: String!) {
        __typename
        deletePosts(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     