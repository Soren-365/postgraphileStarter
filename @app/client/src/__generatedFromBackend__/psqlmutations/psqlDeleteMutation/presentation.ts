export const mutation = `mutation deletePresentation($id: Int , $clientMutationId: String!) {
        __typename
        deletePresentation(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     