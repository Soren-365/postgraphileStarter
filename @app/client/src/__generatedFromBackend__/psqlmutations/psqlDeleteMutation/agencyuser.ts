export const mutation = `mutation deleteAgencyuser($agencyId: Int , $clientMutationId: String!) {
        __typename
        deleteAgencyuser(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     