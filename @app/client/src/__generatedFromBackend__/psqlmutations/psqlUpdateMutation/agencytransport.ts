export const mutation = `mutation updateAgencytransport($agencyId: Int! ,$transportId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAgencytransport(input: {id: $id, patch: {agencyId: $agencyId ,transportId: $transportId ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     