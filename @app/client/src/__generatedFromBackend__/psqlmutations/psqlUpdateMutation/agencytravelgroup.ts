export const mutation = `mutation updateAgencytravelgroup($agencyId: Int ,$travelGroupId: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAgencytravelgroup(input: {clientMutationId: $clientMutationId, patch: {agencyId: $agencyId ,travelGroupId: $travelGroupId ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     