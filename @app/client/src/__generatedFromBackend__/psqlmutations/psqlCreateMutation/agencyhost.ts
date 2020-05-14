export const mutation = `mutation createAgencyhost($agencyId: Int! ,$hostId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencyhost(input: {clientMutationId: $clientMutationId,agencyhost: {agencyId: $agencyId ,hostId: $hostId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     