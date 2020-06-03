export const mutation = `mutation createAgencyevent($agencyId: Int! ,$eventId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAgencyevent(input: {id: $id,agencyevent: {agencyId: $agencyId ,eventId: $eventId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     