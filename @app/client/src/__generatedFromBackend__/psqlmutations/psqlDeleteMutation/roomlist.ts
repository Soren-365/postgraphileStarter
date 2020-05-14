export const mutation = `mutation deleteRoomlist($id: Int , $clientMutationId: String!) {
        __typename
        deleteRoomlist(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     