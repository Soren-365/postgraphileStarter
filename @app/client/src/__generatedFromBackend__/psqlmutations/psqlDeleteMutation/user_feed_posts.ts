export const mutation = `mutation deleteUser_feed_posts($id: Int , $clientMutationId: String!) {
        __typename
        deleteUser_feed_posts(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     