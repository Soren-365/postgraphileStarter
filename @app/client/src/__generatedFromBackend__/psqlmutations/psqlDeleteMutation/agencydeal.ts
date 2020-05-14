export const mutation = `mutation deleteAgencydeal($id: Int , $clientMutationId: String!) {
        __typename
        deleteAgencydeal(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     