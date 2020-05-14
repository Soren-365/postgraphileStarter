export const mutation = `mutation deleteDestinationresource($id: Int , $clientMutationId: String!) {
        __typename
        deleteDestinationresource(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     