export const mutation = `mutation updateRoomcalendarentry($id: Int , $clientMutationId: String!) {
        __typename
        updateRoomcalendarentry(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     