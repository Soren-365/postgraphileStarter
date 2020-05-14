export const mutation = `mutation deleteAgencyevent($agencyId: Int! , $clientMutationId: String!) {
        __typename
        deleteAgencyevent(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     