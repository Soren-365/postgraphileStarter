export const mutation = `mutation createAssochost($assocHostId: [Int] ,$hostId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAssochost(input: {id: $id,assochost: {assocHostId: $assocHostId ,hostId: $hostId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     