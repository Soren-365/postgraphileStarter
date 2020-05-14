export const mutation = `mutation createTouristresource(,$name: String ,$contactId: Int! ,$publisherId: Int! ,$createdById: Int! ,$atTravelGroup: Int ,$atAgency: Int ,$atGuide: Int ,$isSigned: Boolean! ,$priceInfoId: Int! ,$travellingCalendarId: Int! ,$isRomanian: Boolean ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime , $clientMutationId: String!) {
        __typename
        createTouristresource(input: {clientMutationId: $clientMutationId,touristresource: {,name: $name ,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,atTravelGroup: $atTravelGroup ,atAgency: $atAgency ,atGuide: $atGuide ,isSigned: $isSigned ,priceInfoId: $priceInfoId ,travellingCalendarId: $travellingCalendarId ,isRomanian: $isRomanian ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified }}) {
            agencyEdge {
                node {
                      id
                     }  
              }
            clientMutationId
            }
          }`
          export default `${mutation}`
     