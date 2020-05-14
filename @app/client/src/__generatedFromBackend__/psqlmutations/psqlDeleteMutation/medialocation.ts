export const mutation = `mutation deleteMedialocation($id: Int , $clientMutationId: String!) {
        __typename
        deleteMedialocation(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     