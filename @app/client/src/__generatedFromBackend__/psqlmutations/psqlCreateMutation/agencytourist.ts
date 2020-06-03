export const mutation = `mutation createAgencytourist($agencyId: Int! ,$touristId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAgencytourist(input: {id: $id,agencytourist: {agencyId: $agencyId ,touristId: $touristId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     