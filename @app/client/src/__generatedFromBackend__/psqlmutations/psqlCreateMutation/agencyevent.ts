export const mutation = `mutation createAgencyevent($agencyId: Int! ,$eventId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencyevent(input: {clientMutationId: $clientMutationId,agencyevent: {agencyId: $agencyId ,eventId: $eventId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     