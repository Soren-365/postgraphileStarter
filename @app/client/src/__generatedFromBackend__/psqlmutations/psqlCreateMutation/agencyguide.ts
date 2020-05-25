export const mutation = `mutation createAgencyguide($agencyId: Int! ,$guideId: Int! ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAgencyguide(input: {clientMutationId: $clientMutationId,agencyguide: {agencyId: $agencyId ,guideId: $guideId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     