export const mutation = `mutation deleteAgencyguide($agencyId: Int! , $clientMutationId: String!) {
        __typename
        deleteAgencyguide(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     