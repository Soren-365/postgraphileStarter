export const mutation = `mutation deleteMediadestinationresource($id: Int , $clientMutationId: String!) {
        __typename
        deleteMediadestinationresource(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     