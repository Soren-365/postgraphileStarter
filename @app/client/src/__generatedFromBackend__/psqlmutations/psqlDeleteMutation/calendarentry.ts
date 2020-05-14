export const mutation = `mutation deleteCalendarentry($id: Int , $clientMutationId: String!) {
        __typename
        deleteCalendarentry(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     