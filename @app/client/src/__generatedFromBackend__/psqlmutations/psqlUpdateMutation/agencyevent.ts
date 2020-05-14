export const mutation = `mutation updateAgencyevent($agencyId: Int! ,$eventId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAgencyevent(input: {clientMutationId: $clientMutationId, patch: {agencyId: $agencyId ,eventId: $eventId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     