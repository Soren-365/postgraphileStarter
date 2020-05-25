export const mutation = `mutation updateUsertabl($id: Int! , $clientMutationId: String!) {
        __typename
        updateUsertabl(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     