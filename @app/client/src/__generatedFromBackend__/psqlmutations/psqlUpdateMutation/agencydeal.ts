export const mutation = `mutation updateAgencydeal($id: Int , $clientMutationId: String!) {
        __typename
        updateAgencydeal(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     