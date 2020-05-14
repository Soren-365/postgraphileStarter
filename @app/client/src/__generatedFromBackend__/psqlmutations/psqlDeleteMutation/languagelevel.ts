export const mutation = `mutation deleteLanguagelevel($id: Int , $clientMutationId: String!) {
        __typename
        deleteLanguagelevel(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     