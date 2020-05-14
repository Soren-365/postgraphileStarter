export const mutation = `mutation createAssochost($assocHostId: [Int] ,$hostId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAssochost(input: {clientMutationId: $clientMutationId,assochost: {assocHostId: $assocHostId ,hostId: $hostId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     