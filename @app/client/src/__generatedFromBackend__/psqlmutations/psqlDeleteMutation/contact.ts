export const mutation = `mutation deleteContact($id: Int , $clientMutationId: String!) {
        __typename
        deleteContact(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     