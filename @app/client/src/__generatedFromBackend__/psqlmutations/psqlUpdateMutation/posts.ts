export const mutation = `mutation updatePosts($id: Int ,$author_id: ID ,$headline: String! ,$body: String ,$topic: String! ,$created_at: Timestamptz! ,$updated_at: Timestamptz! , $id: String!) {
        __typename
        updatePosts(input: {id: $id, patch: {,author_id: $author_id ,headline: $headline ,body: $body ,topic: $topic ,created_at: $created_at ,updated_at: $updated_at }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     