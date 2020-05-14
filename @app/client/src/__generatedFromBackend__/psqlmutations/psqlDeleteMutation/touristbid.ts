export const mutation = `mutation deleteTouristbid($id: Int , $clientMutationId: String!) {
        __typename
        deleteTouristbid(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     