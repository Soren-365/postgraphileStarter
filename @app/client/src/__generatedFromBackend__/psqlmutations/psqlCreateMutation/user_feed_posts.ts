export const mutation = `mutation createUser_feed_posts(,$user_id: ID! ,$post_id: Int! ,$created_at: Timestamptz! , $id: String!) {
        __typename
        createUser_feed_posts(input: {id: $id,user_feed_posts: {,user_id: $user_id ,post_id: $post_id ,created_at: $created_at }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     