export const mutation = `mutation deleteUsertabl($id: Int! , $clientMutationId: String!) {
        __typename
        deleteUsertabl(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     