export const mutation = `mutation deleteAgencyoffer($id: Int , $clientMutationId: String!) {
        __typename
        deleteAgencyoffer(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     