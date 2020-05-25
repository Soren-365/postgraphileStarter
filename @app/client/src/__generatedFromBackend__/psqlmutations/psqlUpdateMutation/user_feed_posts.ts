export const mutation = `mutation updateUser_feed_posts($id: Int ,$user_id: ID! ,$post_id: Int! , $clientMutationId: String!) {
        __typename
        updateUser_feed_posts(input: {clientMutationId: $clientMutationId, patch: {,user_id: $user_id ,post_id: $post_id }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     