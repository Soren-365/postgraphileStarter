export const mutation = `mutation deleteCommandlogentry($id: Int , $clientMutationId: String!) {
        __typename
        deleteCommandlogentry(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     