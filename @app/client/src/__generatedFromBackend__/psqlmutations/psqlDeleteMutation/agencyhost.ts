export const mutation = `mutation deleteAgencyhost($agencyId: Int! , $clientMutationId: String!) {
        __typename
        deleteAgencyhost(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     