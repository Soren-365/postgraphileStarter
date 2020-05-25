export const mutation = `mutation createAgencytravelgroup($agencyId: Int ,$travelGroupId: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencytravelgroup(input: {clientMutationId: $clientMutationId,agencytravelgroup: {agencyId: $agencyId ,travelGroupId: $travelGroupId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     