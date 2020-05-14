export const mutation = `mutation deletePriceinfo($id: Int , $clientMutationId: String!) {
        __typename
        deletePriceinfo(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     