export const mutation = `mutation createPosts(,$author_id: ID ,$headline: String! ,$body: String ,$topic: String! ,$created_at: Timestamptz! , $clientMutationId: String!) {
        __typename
        createPosts(input: {clientMutationId: $clientMutationId,posts: {,author_id: $author_id ,headline: $headline ,body: $body ,topic: $topic ,created_at: $created_at }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     