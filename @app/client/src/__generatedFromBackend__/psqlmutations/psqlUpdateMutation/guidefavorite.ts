export const mutation = `mutation updateGuidefavorite($id: Int , $clientMutationId: String!) {
        __typename
        updateGuidefavorite(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     