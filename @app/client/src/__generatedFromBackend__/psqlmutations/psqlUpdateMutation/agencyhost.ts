export const mutation = `mutation updateAgencyhost($agencyId: Int! ,$hostId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAgencyhost(input: {clientMutationId: $clientMutationId, patch: {agencyId: $agencyId ,hostId: $hostId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     