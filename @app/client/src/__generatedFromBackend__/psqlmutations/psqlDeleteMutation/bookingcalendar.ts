export const mutation = `mutation deleteBookingcalendar($id: Int , $clientMutationId: String!) {
        __typename
        deleteBookingcalendar(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     