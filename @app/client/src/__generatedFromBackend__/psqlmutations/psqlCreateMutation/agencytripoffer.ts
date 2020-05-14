export const mutation = `mutation createAgencytripoffer($agencyId: Int! ,$tripOfferId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencytripoffer(input: {clientMutationId: $clientMutationId,agencytripoffer: {agencyId: $agencyId ,tripOfferId: $tripOfferId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     