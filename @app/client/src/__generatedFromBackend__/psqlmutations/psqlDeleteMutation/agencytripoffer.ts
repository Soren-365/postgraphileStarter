export const mutation = `mutation deleteAgencytripoffer($agencyId: Int! , $clientMutationId: String!) {
        __typename
        deleteAgencytripoffer(input: {clientMutationId: $clientMutationId, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     