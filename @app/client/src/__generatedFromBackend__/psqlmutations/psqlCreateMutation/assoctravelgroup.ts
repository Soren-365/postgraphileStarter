export const mutation = `mutation createAssoctravelgroup($assocTravelGroupId: [Int] ,$travelGroupId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAssoctravelgroup(input: {id: $id,assoctravelgroup: {assocTravelGroupId: $assocTravelGroupId ,travelGroupId: $travelGroupId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     