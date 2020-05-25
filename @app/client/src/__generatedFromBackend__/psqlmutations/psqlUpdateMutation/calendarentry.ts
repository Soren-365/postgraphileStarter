export const mutation = `mutation updateCalendarentry($id: Int , $clientMutationId: String!) {
        __typename
        updateCalendarentry(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     