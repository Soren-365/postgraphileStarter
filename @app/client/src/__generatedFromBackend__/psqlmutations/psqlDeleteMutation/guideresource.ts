export const mutation = `mutation deleteGuideresource($id: Int , $clientMutationId: String!) {
        __typename
        deleteGuideresource(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     