export const mutation = `mutation deleteGuideoffer($id: Int , $clientMutationId: String!) {
        __typename
        deleteGuideoffer(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     