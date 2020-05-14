export const mutation = `mutation deleteAgencytransport($agencyId: Int! , $clientMutationId: String!) {
        __typename
        deleteAgencytransport(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     