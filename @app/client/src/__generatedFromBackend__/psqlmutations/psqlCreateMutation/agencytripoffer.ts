export const mutation = `mutation createAgencytripoffer($agencyId: Int! ,$tripOfferId: Int! ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAgencytripoffer(input: {id: $id,agencytripoffer: {agencyId: $agencyId ,tripOfferId: $tripOfferId ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     