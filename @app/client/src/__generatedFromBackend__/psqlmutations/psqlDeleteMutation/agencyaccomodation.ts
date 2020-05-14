export const mutation = `mutation deleteAgencyaccomodation($agencyId: Int! , $clientMutationId: String!) {
        __typename
        deleteAgencyaccomodation(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     