export const mutation = `mutation updateGuidebid($id: Int , $clientMutationId: String!) {
        __typename
        updateGuidebid(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     