export const mutation = `mutation updateTouristresource($id: Int ,$name: String ,$contactId: Int! ,$publisherId: Int! ,$createdById: Int! ,$atTravelGroup: Int ,$atAgency: Int ,$atGuide: Int ,$isSigned: Boolean! ,$priceInfoId: Int! ,$travellingCalendarId: Int! ,$isRomanian: Boolean ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateTouristresource(input: {id: $id, patch: {,name: $name ,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,atTravelGroup: $atTravelGroup ,atAgency: $atAgency ,atGuide: $atGuide ,isSigned: $isSigned ,priceInfoId: $priceInfoId ,travellingCalendarId: $travellingCalendarId ,isRomanian: $isRomanian ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     