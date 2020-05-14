export const mutation = `mutation updateAssoctravelgroup($assocTravelGroupId: [Int] ,$travelGroupId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAssoctravelgroup(input: {clientMutationId: $clientMutationId, patch: {assocTravelGroupId: $assocTravelGroupId ,travelGroupId: $travelGroupId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     