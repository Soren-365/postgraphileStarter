export const mutation = `mutation deleteAgencytourist($agencyId: Int! , $clientMutationId: String!) {
        __typename
        deleteAgencytourist(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     