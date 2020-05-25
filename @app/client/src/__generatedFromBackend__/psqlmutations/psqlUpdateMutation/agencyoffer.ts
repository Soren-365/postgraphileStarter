export const mutation = `mutation updateAgencyoffer($id: Int , $clientMutationId: String!) {
        __typename
        updateAgencyoffer(input: {clientMutationId: $clientMutationId, patch: {}, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     