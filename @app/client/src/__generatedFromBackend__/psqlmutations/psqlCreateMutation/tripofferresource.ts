export const mutation = `mutation createTripofferresource(,$tripOfferName: String ,$publisherId: Int! ,$createdById: Int! ,$availableAtCalendarId: Int! ,$guideResponsibleId: Int! ,$guideSecondaryId: Int ,$atAgency: Int ,$priceInfoId: Int! ,$destinationId: [Int]! ,$isSigned: Boolean! ,$atGuide: Int ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime , $clientMutationId: String!) {
        __typename
        createTripofferresource(input: {clientMutationId: $clientMutationId,tripofferresource: {,tripOfferName: $tripOfferName ,publisherId: $publisherId ,createdById: $createdById ,availableAtCalendarId: $availableAtCalendarId ,guideResponsibleId: $guideResponsibleId ,guideSecondaryId: $guideSecondaryId ,atAgency: $atAgency ,priceInfoId: $priceInfoId ,destinationId: $destinationId ,isSigned: $isSigned ,atGuide: $atGuide ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     