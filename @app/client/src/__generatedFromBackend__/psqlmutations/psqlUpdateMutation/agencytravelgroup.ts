export const mutation = `mutation updateAgencytravelgroup($agencyId: Int ,$travelGroupId: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAgencytravelgroup(input: {id: $id, patch: {agencyId: $agencyId ,travelGroupId: $travelGroupId ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     