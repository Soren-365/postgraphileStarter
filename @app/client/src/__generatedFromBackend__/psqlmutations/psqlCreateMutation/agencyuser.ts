export const mutation = `mutation createAgencyuser($agencyId: Int ,$userId: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAgencyuser(input: {id: $id,agencyuser: {agencyId: $agencyId ,userId: $userId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     