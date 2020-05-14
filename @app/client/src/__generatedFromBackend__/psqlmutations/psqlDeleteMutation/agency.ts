export const mutation = `mutation deleteAgency($id: Int , $clientMutationId: String!) {
        __typename
        deleteAgency(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     