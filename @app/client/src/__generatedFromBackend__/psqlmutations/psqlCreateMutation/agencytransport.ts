export const mutation = `mutation createAgencytransport($agencyId: Int! ,$transportId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAgencytransport(input: {id: $id,agencytransport: {agencyId: $agencyId ,transportId: $transportId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     