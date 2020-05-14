export const mutation = `mutation deleteHostresource($id: Int , $clientMutationId: String!) {
        __typename
        deleteHostresource(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     