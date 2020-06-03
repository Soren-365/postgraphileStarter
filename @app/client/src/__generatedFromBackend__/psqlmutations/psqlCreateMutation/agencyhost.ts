export const mutation = `mutation createAgencyhost($agencyId: Int! ,$hostId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAgencyhost(input: {id: $id,agencyhost: {agencyId: $agencyId ,hostId: $hostId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     