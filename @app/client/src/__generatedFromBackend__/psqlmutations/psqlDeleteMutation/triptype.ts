export const mutation = `mutation deleteTriptype($id: Int! , $clientMutationId: String!) {
        __typename
        deleteTriptype(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     