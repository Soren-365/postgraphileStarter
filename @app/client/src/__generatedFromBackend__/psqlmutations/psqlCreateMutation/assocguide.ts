export const mutation = `mutation createAssocguide($assocGuideId: [Int] ,$guideId: Int ,$atAgency: Int ,$timeCreated: Datetime , $clientMutationId: String!) {
        __typename
        createAssocguide(input: {clientMutationId: $clientMutationId,assocguide: {assocGuideId: $assocGuideId ,guideId: $guideId ,atAgency: $atAgency ,timeCreated: $timeCreated }}) {
            agencyEdge {
                node {
                      id
                     }
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     