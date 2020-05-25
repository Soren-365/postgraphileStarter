export const mutation = `mutation createAgencyuser($agencyId: Int ,$userId: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencyuser(input: {clientMutationId: $clientMutationId,agencyuser: {agencyId: $agencyId ,userId: $userId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     