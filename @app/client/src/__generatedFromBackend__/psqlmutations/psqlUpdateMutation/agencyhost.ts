export const mutation = `mutation updateAgencyhost($agencyId: Int! ,$hostId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAgencyhost(input: {id: $id, patch: {agencyId: $agencyId ,hostId: $hostId ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     