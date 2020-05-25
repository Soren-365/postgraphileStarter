export const mutation = `mutation updateGuidedeal($id: Int , $clientMutationId: String!) {
        __typename
        updateGuidedeal(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     