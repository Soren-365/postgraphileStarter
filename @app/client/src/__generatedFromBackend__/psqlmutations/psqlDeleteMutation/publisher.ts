export const mutation = `mutation deletePublisher($id: Int , $clientMutationId: String!) {
        __typename
        deletePublisher(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     