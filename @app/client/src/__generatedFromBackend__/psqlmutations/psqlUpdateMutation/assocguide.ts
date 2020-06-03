export const mutation = `mutation updateAssocguide($assocGuideId: [Int] ,$guideId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateAssocguide(input: {id: $id, patch: {assocGuideId: $assocGuideId ,guideId: $guideId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     