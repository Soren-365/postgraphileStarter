export const mutation = `mutation updateEventresource($id: Int ,$eventName: String ,$agencyName: String ,$contactId: Int! ,$publisherId: Int! ,$createdById: Int! ,$locatedIn: Area ,$locationAddressId: Int! ,$tripTypeName: String ,$activeAtPeriodsId: Int! ,$ownedByAt: Boolean! ,$atAgency: Int ,$atGuide: Int ,$presentationId: Int! ,$isActive: Boolean ,$isPublic: Boolean! ,$lastModified: Datetime , $clientMutationId: String!) {
        __typename
        updateEventresource(input: {clientMutationId: $clientMutationId, patch: {,eventName: $eventName ,agencyName: $agencyName ,contactId: $contactId ,publisherId: $publisherId ,createdById: $createdById ,locatedIn: $locatedIn ,locationAddressId: $locationAddressId ,tripTypeName: $tripTypeName ,activeAtPeriodsId: $activeAtPeriodsId ,ownedByAt: $ownedByAt ,atAgency: $atAgency ,atGuide: $atGuide ,presentationId: $presentationId ,isActive: $isActive ,isPublic: $isPublic ,lastModified: $lastModified }, id: $id}) {
            clientMutationId
            }
          }`
          export default `${mutation}`
     