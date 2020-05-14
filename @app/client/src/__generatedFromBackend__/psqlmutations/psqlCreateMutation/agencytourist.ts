export const mutation = `mutation createAgencytourist($agencyId: Int! ,$touristId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencytourist(input: {clientMutationId: $clientMutationId,agencytourist: {agencyId: $agencyId ,touristId: $touristId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     