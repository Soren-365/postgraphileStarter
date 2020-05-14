export const mutation = `mutation deleteRoomcalendarentry($id: Int , $clientMutationId: String!) {
        __typename
        deleteRoomcalendarentry(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     