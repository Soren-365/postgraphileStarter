export const mutation = `mutation deleteTouristreview($id: Int , $clientMutationId: String!) {
        __typename
        deleteTouristreview(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     