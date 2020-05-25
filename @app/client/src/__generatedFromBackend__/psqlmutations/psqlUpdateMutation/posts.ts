export const mutation = `mutation updatePosts($id: Int ,$author_id: ID ,$headline: String! ,$body: String ,$topic: String! ,$created_at: Timestamptz! , $clientMutationId: String!) {
        __typename
        updatePosts(input: {clientMutationId: $clientMutationId, patch: {,author_id: $author_id ,headline: $headline ,body: $body ,topic: $topic ,created_at: $created_at }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     