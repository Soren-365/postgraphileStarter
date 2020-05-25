export const mutation = `mutation createUser_feed_posts(,$user_id: ID! ,$post_id: Int! , $clientMutationId: String!) {
        __typename
        createUser_feed_posts(input: {clientMutationId: $clientMutationId,user_feed_posts: {,user_id: $user_id ,post_id: $post_id }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     