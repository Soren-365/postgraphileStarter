export const mutation = `mutation deleteTouristdeal($id: Int , $clientMutationId: String!) {
        __typename
        deleteTouristdeal(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     