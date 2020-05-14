export const mutation = `mutation deleteTransportresource($id: Int , $clientMutationId: String!) {
        __typename
        deleteTransportresource(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     