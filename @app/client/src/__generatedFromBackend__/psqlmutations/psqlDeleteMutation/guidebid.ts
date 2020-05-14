export const mutation = `mutation deleteGuidebid($id: Int , $clientMutationId: String!) {
        __typename
        deleteGuidebid(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     