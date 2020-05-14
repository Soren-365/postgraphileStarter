export const mutation = `mutation deleteGuidedeal($id: Int , $clientMutationId: String!) {
        __typename
        deleteGuidedeal(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     