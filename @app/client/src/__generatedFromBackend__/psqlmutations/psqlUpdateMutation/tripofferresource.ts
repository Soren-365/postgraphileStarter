export const mutation = `mutation updateTripofferresource($id: Int ,$tripOfferName: String ,$publisherId: Int! ,$createdById: Int! ,$availableAtCalendarId: Int! ,$guideResponsibleId: Int! ,$guideSecondaryId: Int ,$atAgency: Int ,$priceInfoId: Int! ,$destinationId: [Int]! ,$isSigned: Boolean! ,$atGuide: Int ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateTripofferresource(input: {id: $id, patch: {,tripOfferName: $tripOfferName ,publisherId: $publisherId ,createdById: $createdById ,availableAtCalendarId: $availableAtCalendarId ,guideResponsibleId: $guideResponsibleId ,guideSecondaryId: $guideSecondaryId ,atAgency: $atAgency ,priceInfoId: $priceInfoId ,destinationId: $destinationId ,isSigned: $isSigned ,atGuide: $atGuide ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     