export const mutation = `mutation updateAssocguide($assocGuideId: [Int] ,$guideId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        updateAssocguide(input: {clientMutationId: $clientMutationId, patch: {assocGuideId: $assocGuideId ,guideId: $guideId ,atAgency: $atAgency ,timeCreated: $timeCreated }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     