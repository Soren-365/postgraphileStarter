export const mutation = `mutation deleteGuide($id: Int , $clientMutationId: String!) {
        __typename
        deleteGuide(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     