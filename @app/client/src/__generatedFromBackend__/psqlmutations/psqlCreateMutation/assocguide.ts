export const mutation = `mutation createAssocguide($assocGuideId: [Int] ,$guideId: Int ,$atAgency: Int ,$timeCreated: Datetime , $id: String!) {
        __typename
        createAssocguide(input: {id: $id,assocguide: {assocGuideId: $assocGuideId ,guideId: $guideId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            id
            }
          }`
          export default `${mutation}`
     