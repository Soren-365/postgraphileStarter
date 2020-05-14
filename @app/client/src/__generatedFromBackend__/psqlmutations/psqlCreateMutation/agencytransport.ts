export const mutation = `mutation createAgencytransport($agencyId: Int! ,$transportId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencytransport(input: {clientMutationId: $clientMutationId,agencytransport: {agencyId: $agencyId ,transportId: $transportId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     