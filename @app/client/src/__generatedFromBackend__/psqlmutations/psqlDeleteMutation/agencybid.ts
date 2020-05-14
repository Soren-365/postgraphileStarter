export const mutation = `mutation deleteAgencybid($id: Int , $clientMutationId: String!) {
        __typename
        deleteAgencybid(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     