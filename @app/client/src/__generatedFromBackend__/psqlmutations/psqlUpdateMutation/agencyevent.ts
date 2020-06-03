export const mutation = `mutation updateAgencyevent($agencyId: Int! ,$eventId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAgencyevent(input: {id: $id, patch: {agencyId: $agencyId ,eventId: $eventId ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     