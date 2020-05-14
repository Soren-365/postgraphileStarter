export const mutation = `mutation deleteReview($id: Int , $clientMutationId: String!) {
        __typename
        deleteReview(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     