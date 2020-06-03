export const mutation = `mutation updateUser_feed_posts($id: Int ,$user_id: ID! ,$post_id: Int! ,$created_at: Timestamptz! , $id: String!) {
        __typename
        updateUser_feed_posts(input: {id: $id, patch: {,user_id: $user_id ,post_id: $post_id ,created_at: $created_at }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     