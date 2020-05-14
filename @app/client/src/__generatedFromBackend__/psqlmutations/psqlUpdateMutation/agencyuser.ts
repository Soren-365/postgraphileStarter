export const mutation = `mutation updateAgencyuser($agencyId: Int ,$userId: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAgencyuser(input: {clientMutationId: $clientMutationId, patch: {agencyId: $agencyId ,userId: $userId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     