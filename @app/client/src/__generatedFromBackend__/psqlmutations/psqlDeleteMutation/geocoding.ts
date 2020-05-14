export const mutation = `mutation deleteGeocoding($id: Int , $clientMutationId: String!) {
        __typename
        deleteGeocoding(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     