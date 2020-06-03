export const mutation = `mutation updateEventresource($id: Int ,$eventName: String ,$agencyName: String ,$contactId: Int! ,$publisherId: Int! ,$createdById: Int! ,$locatedIn: Area ,$locationAddressId: Int! ,$tripTypeName: String ,$activeAtPeriodsId: Int! ,$ownedByAt: Boolean! ,$atAgency: Int ,$atGuide: Int ,$presentationId: Int! ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime ,$timeCreated: Datetime , $id: String!) {
        __typename
        updateEventresource(input: {id: $id, patch: {,eventName: $eventName ,agencyName: $agencyName ,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,locatedIn: $locatedIn ,locationAddressId: $locationAddressId ,tripTypeName: $tripTypeName ,activeAtPeriodsId: $activeAtPeriodsId ,ownedByAt: $ownedByAt ,atAgency: $atAgency ,atGuide: $atGuide ,presentationId: $presentationId ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified ,timeCreated: $timeCreated }, id: $id}) {
            id
            }
          }`
          export default `${mutation}`
     