export const mutation = `mutation deleteEventresource($id: Int , $clientMutationId: String!) {
        __typename
        deleteEventresource(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     