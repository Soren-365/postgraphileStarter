export const mutation = `mutation updateGuideoffer($id: Int , $clientMutationId: String!) {
        __typename
        updateGuideoffer(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     