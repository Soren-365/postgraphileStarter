export const mutation = `mutation deleteGuidereview($id: Int , $clientMutationId: String!) {
        __typename
        deleteGuidereview(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     