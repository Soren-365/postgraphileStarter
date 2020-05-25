export const mutation = `mutation createAssoctravelgroup($assocTravelGroupId: [Int] ,$travelGroupId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAssoctravelgroup(input: {clientMutationId: $clientMutationId,assoctravelgroup: {assocTravelGroupId: $assocTravelGroupId ,travelGroupId: $travelGroupId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     