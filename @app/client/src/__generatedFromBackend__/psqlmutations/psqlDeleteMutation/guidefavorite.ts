export const mutation = `mutation deleteGuidefavorite($id: Int , $clientMutationId: String!) {
        __typename
        deleteGuidefavorite(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     