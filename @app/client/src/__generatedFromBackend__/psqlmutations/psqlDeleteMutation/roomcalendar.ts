export const mutation = `mutation deleteRoomcalendar($id: Int , $clientMutationId: String!) {
        __typename
        deleteRoomcalendar(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     