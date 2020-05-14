export const mutation = `mutation deleteAgencyreview($id: Int , $clientMutationId: String!) {
        __typename
        deleteAgencyreview(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     