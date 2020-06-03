export const mutation = `mutation createAgencytravelgroup($agencyId: Int ,$travelGroupId: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAgencytravelgroup(input: {id: $id,agencytravelgroup: {agencyId: $agencyId ,travelGroupId: $travelGroupId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     