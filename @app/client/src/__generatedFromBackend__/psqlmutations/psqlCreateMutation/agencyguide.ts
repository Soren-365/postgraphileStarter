export const mutation = `mutation createAgencyguide($agencyId: Int! ,$guideId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAgencyguide(input: {id: $id,agencyguide: {agencyId: $agencyId ,guideId: $guideId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     