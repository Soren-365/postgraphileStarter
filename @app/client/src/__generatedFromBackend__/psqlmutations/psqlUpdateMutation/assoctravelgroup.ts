export const mutation = `mutation updateAssoctravelgroup($assocTravelGroupId: [Int] ,$travelGroupId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAssoctravelgroup(input: {id: $id, patch: {assocTravelGroupId: $assocTravelGroupId ,travelGroupId: $travelGroupId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     