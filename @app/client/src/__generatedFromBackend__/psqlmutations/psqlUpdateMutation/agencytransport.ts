export const mutation = `mutation updateAgencytransport($agencyId: Int! ,$transportId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAgencytransport(input: {clientMutationId: $clientMutationId, patch: {agencyId: $agencyId ,transportId: $transportId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     