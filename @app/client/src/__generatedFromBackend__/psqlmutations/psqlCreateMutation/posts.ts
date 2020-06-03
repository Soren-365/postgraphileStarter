export const mutation = `mutation createPosts(,$author_id: ID ,$headline: String! ,$body: String ,$topic: String! ,$created_at: Timestamptz! ,$updated_at: Timestamptz! , $id: String!) {
        __typename
        createPosts(input: {id: $id,posts: {,author_id: $author_id ,headline: $headline ,body: $body ,topic: $topic ,created_at: $created_at ,updated_at: $updated_at }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     